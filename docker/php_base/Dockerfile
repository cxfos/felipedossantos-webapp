FROM php:7.2.17-apache

RUN apt-get update && apt-get install redis-tools -y && apt-get install -y redis-server openssh-client
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY ./php.ini /usr/local/etc/php/php.ini
COPY apache2.conf /etc/apache2/apache2.conf
COPY sites-available/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY runit /usr/local/bin/

RUN chmod +x /usr/local/bin/runit
RUN mkdir -p /var/log/batches

# disable mod_deflate to avoid problems with forwardhq
RUN a2dismod -f deflate && a2dismod mpm_event && a2enmod mpm_prefork && a2enmod headers && a2enmod rewrite && a2enmod ssl

RUN apt-get update && apt-get install -y libmcrypt-dev libssh2-1-dev libssh2-1

# install phpredis extension
ENV PHPREDIS_VERSION 4.3.0

RUN mkdir -p /usr/src/php/ext/redis \
    && curl -L https://github.com/phpredis/phpredis/archive/$PHPREDIS_VERSION.tar.gz | tar xvz -C /usr/src/php/ext/redis --strip 1 \
    && echo 'redis' >> /usr/src/php-available-exts \
    && docker-php-ext-install redis

RUN /usr/local/bin/docker-php-ext-install mysqli opcache pdo pdo_mysql shmop mbstring calendar

RUN pecl install xdebug
RUN /usr/local/bin/docker-php-ext-enable xdebug

RUN pecl install ssh2-1
RUN /usr/local/bin/docker-php-ext-enable ssh2

CMD ["runit"]
