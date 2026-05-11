(function() {
    var host = window.location.hostname;
    if (!/^www\.(qnly|qnlanyang)\.top$/.test(host)) {
        return;
    }

    var target = window.location.href.replace("//www.", "//ww1.");

    function showMirrorNotice() {
        if (document.getElementById("mirror-notice")) {
            return;
        }

        var style = document.createElement("style");
        style.textContent = "#mirror-notice{position:fixed;top:12px;left:50%;z-index:2000;box-sizing:border-box;width:min(92vw,520px);padding:12px 54px 12px 16px;border:1px solid rgba(255,255,255,.35);border-radius:8px;background:rgba(28,33,39,.92);box-shadow:0 14px 34px rgba(0,0,0,.22);color:#fff;font:14px/1.5 -apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Microsoft YaHei\",sans-serif;transform:translate(-50%,-120%);transition:transform .24s ease}#mirror-notice.is-visible{transform:translate(-50%,0)}#mirror-notice a{color:#9ee8ff;font-weight:700;text-decoration:none}#mirror-notice a:hover{text-decoration:underline}#mirror-notice .mirror-notice-close{appearance:none;-webkit-appearance:none;position:absolute;top:50%;right:12px;display:block;box-sizing:border-box;width:34px;height:34px;min-width:34px;margin:0;padding:0;border:0;border-radius:50%;background:rgba(255,255,255,.15);box-shadow:none;color:transparent;cursor:pointer;font:0/0 a;line-height:0;outline:0;text-align:center;white-space:normal;transform:translateY(-50%)}#mirror-notice .mirror-notice-close:before,#mirror-notice .mirror-notice-close:after{content:\"\";position:absolute;top:50%;left:50%;width:15px;height:2px;border-radius:2px;background:rgba(255,255,255,.92);transform:translate(-50%,-50%) rotate(45deg)}#mirror-notice .mirror-notice-close:after{transform:translate(-50%,-50%) rotate(-45deg)}#mirror-notice .mirror-notice-close:hover{background:rgba(255,255,255,.24)}";
        document.head.appendChild(style);

        var notice = document.createElement("div");
        notice.id = "mirror-notice";
        notice.setAttribute("role", "status");
        notice.appendChild(document.createTextNode("当前页面加载可能较慢，可切换到 "));

        var link = document.createElement("a");
        link.href = target;
        link.textContent = "镜像源";
        notice.appendChild(link);

        var closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "mirror-notice-close";
        closeButton.setAttribute("aria-label", "关闭");
        notice.appendChild(closeButton);

        document.documentElement.appendChild(notice);
        closeButton.onclick = function() {
            notice.className = "";
            window.setTimeout(function() {
                if (notice.parentNode) {
                    notice.parentNode.removeChild(notice);
                }
            }, 240);
        };

        requestAnimationFrame(function() {
            notice.className = "is-visible";
        });

        window.setTimeout(function() {
            closeButton.click();
        }, 10000);
    }

    if (document.head) {
        showMirrorNotice();
    } else {
        document.addEventListener("DOMContentLoaded", showMirrorNotice, { once: true });
    }
})();
