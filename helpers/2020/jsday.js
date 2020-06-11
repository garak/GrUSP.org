---
---
(function (d, data) {
    var tags, name, mp = d.getElementsByClassName('media-partners__list');

    if (!mp.length) {
        return;
    }

    mp = mp[0];
    tags = mp.getAttribute('data-tags') ? mp.getAttribute('data-tags').split(/ +/) : [ "main" ];
    name = mp.getAttribute('data-name') ?  mp.getAttribute('data-name') : 'jsday';

    data.forEach(function(v, k) {
        var hd, ha, hi;

        if (v.tags) {
            var c = v.tags.filter(function(n) {
                return n === name || tags.indexOf(n) !== -1;
            });

            if (!c.length) {
                return;
            }
        }

        hi = d.createElement("IMG");
        hi.setAttribute("src", "{{ site.helper_baseurl }}/img/media-partners/" + v.img);
        hi.setAttribute("alt", v.name);
        hi.setAttribute("class", "media-partner__logo");

        ha = d.createElement("A");
        ha.setAttribute("href", v.url.replace(/%name%/g, encodeURIComponent(name)));
        ha.setAttribute("title", v.name);
        ha.setAttribute("class", "media-partner__card");
        ha.appendChild(hi);

        hd = d.createElement("DIV");
        hd.setAttribute("class", "media-partner");
        hd.appendChild(ha);

        mp.appendChild(hd);
    });

})(document, {{ site.data.media_partners_2020 | sort_natural: 'name' | jsonify }});
