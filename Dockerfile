FROM us.gcr.io/image-place/composer-onbuild AS builder
FROM us.gcr.io/image-place/php7-fpm
COPY --from=builder /out /var/www/html
WORKDIR /var/www/html
RUN touch /var/www/html/.env
RUN mkdir -p storage/logs storage/framework/cache storage/framework/testing storage/framework/sessions storage/framework/views
RUN chmod -R 575 storage
RUN mkdir -p bootstrap/cache
RUN chmod -R 575 bootstrap/cache
RUN chown -R root:www-data /var/www/html
