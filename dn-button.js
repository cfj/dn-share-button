(function() {
    'use strict';
    
    var DNButton = {
        config: {
            DNButtonClass: 'dn-share-button',
            pageTitle: document.getElementsByTagName('title')[0].innerHTML,
            pageHref: document.location.href,
            appURL: '/'
        },
        insertIframe: function(anchor) {
            var iframe = document.createElement('iframe');

            iframe.src = this.config.appURL + '/?title=' + encodeURIComponent(this.config.pageTitle) + '&url=' + encodeURIComponent(this.config.pageHref);
            iframe.frameBorder = '0';
            iframe.scrolling = 'no';
            iframe.style.width = '50px';
            iframe.style.height = '20px';

            anchor.parentNode.insertBefore(iframe, anchor);
            anchor.parentNode.removeChild(anchor);
        },
        render: function() {
            var dnButtons = document.getElementsByClassName(this.config.DNButtonClass);

            for(var i = dnButtons.length - 1; i >= 0; i--) {
                this.insertIframe(dnButtons[i]);
            }
        }
    };

    DNButton.render();
})();










/*

(function(document, script, id) {
    var js;
    var firstScriptElement = document.getElementsByTagName(script)[0];

    if(!document.getElementById(id)) {
        js = document.createElement(script);
        js.id = id;
        js.async = true;
        js.defer = true;
        js.src = 'dn-button.js';
        firstScriptElement.parentNode.insertBefore(js, firstScriptElement);
    }

})(document, 'script', 'dn-button-js');


 */