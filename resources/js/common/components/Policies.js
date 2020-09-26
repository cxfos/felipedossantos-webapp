import React, {useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Copyright() {
    useEffect(() => {
        (function (w, d) {
            var loader = function () {
                var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
                s.src = "https://cdn.iubenda.com/iubenda.js";
                tag.parentNode.insertBefore(s, tag);
            };
            if (w.addEventListener) {
                w.addEventListener("load", loader, false);
            } else if (w.attachEvent) {
                w.attachEvent("onload", loader);
            } else {
                w.onload = loader;
            }
        })(window, document);
    }, [])
    return (
        <>
            <Typography variant="body2" color="textSecondary" align="center">
                <Link color="inherit"
                      href="https://www.iubenda.com/privacy-policy/55220466"
                      className="iubenda-nostyle no-brand iubenda-embed"
                      title="Privacy Policy "
                >Privacy Policy</Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                <Link color="inherit"
                      href="https://www.iubenda.com/privacy-policy/55220466/cookie-policy"
                      className="iubenda-nostyle no-brand iubenda-embed"
                      title="Cookie Policy "
                >Cookie Policy</Link>
            </Typography>
        </>
    );
}
