"use strict";
! function() {
    function g() {
        y.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, y.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }

    function q() {
        p.clearRect(0, 0, y.width, y.height);
        var a = [w].concat(j);
        j.forEach(function(t) {
            t.x += t.xa, t.y += t.ya, t.xa *= t.x > y.width || t.x < 0 ? -1 : 1, t.ya *= t.y > y.height || t.y < 0 ? -1 : 1, p.fillRect(t.x - 0.5, t.y - 0.5, 1, 1);
            for (var A = 0; A < a.length; A++) {
                var i = a[A];
                if (t !== i && null !== i.x && null !== i.y) {
                    var z, l = t.x - i.x,
                        B = t.y - i.y,
                        n = l * l + B * B;
                    n < i.max && (i === w && n >= i.max / 2 && (t.x -= 0.03 * l, t.y -= 0.03 * B), z = (i.max - n) / i.max, p.beginPath(), p.lineWidth = z / 2, p.strokeStyle = "rgba(0,0,0," + (z + 0.2) + ")", p.moveTo(t.x, t.y), p.lineTo(i.x, i.y), p.stroke())
                }
            }
            a.splice(a.indexOf(t), 1)
        }), f(q)
    }
    var h = document.createElement("canvas");
    h.id = "canvas_nest";
    h.style.position = "fixed";
    h.style.top = 0;
    h.style.left = 0;
    h.style.zIndex = -1;
    h.style.opacity = 0.5;
    document.getElementsByTagName("body")[0].appendChild(h);
    var y = document.getElementById("canvas_nest"),
        p = y.getContext("2d");
    g(), window.onresize = g;
    var f = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                window.setTimeout(a, 1000 / 60)
            }
        }(),
        w = {
            x: null,
            y: null,
            max: 20000
        };
    window.onmousemove = function(a) {
        a = a || window.event, w.x = a.clientX, w.y = a.clientY
    }, window.onmouseout = function(a) {
        w.x = null, w.y = null
    };
    for (var j = [], s = 0; 150 > s; s++) {
        var x = Math.random() * y.width,
            v = Math.random() * y.height,
            b = 2 * Math.random() - 1,
            k = 2 * Math.random() - 1;
        j.push({
            x: x,
            y: v,
            xa: b,
            ya: k,
            max: 6000
        })
    }
    setTimeout(function() {
        q()
    }, 100)
}();
