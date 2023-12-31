(()=>{
    "use strict";
    const t = document.querySelector.bind(document)
      , e = document.querySelectorAll.bind(document)
      , o = (t,e,o)=>null == t ? void 0 : t.addEventListener(e, o)
      , n = (t,e)=>{
        t && (t.innerHTML = e)
    }
      , r = (t,e)=>{
        if (t)
            for (const o in e)
                t.style[o] = e[o]
    }
      , a = (t,e)=>{
        if (t)
            for (let o of e.split(" "))
                return t.classList.contains(o)
    }
      , l = (t,e,o="add")=>{
        t && e.split(" ").forEach((e=>{
            t.classList[o](e)
        }
        ))
    }
      , s = t=>t.getBoundingClientRect()
      , c = (t,e)=>Math.floor(Math.random() * (e - t + 1)) + t
      , i = "container"
      , d = ["#de8f6f", "#3c7cab"]
      , p = "ARCHERY_MASTER_JORGE"
      , h = ()=>{
        const t = window.localStorage.getItem(p) || "";
        return "" !== t && (t=>{
            try {
                return JSON.parse(t),
                !0
            } catch (t) {
                return !1
            }
        }
        )(t) ? JSON.parse(t) : {}
    }
      , f = (t,e)=>{
        const o = h();
        o[t] = e,
        (t=>{
            const e = JSON.stringify(t);
            window.localStorage.setItem(p, e)
        }
        )(o)
    }
      , u = (t="",e)=>h()[t] || e;
    let b, v, w;
    v = .3,
    b = (t=1,e=.05,o=220,n=0,r=0,a=.1,l=0,s=1,c=0,i=0,d=0,p=0,h=0,f=0,u=0,b=0,v=0,g=1,$=0,y=0,x=Math,m=44100,M=2 * x.PI,E=(c *= 500 * M / m / m),k=(o *= (1 - e + 2 * e * x.random(e = [])) * M / m),I=0,j=0,A=0,S=1,R=0,L=0,O=0,B,C)=>{
        for (n = m * n + 9,
        $ *= m,
        r *= m,
        a *= m,
        v *= m,
        i *= 500 * M / Math.pow(m, 3),
        u *= M / m,
        d *= M / m,
        p *= m,
        h = m * h | 0,
        C = n + $ + r + a + v | 0; A < C; e[A++] = O)
            ++L % (100 * b | 0) || (O = l ? 1 < l ? 2 < l ? 3 < l ? x.sin(Math.pow(I % M, 3)) : x.max(x.min(x.tan(I), 1), -1) : 1 - (2 * I / M % 2 + 2) % 2 : 1 - 4 * x.abs(x.round(I / M) - I / M) : x.sin(I),
            O = (h ? 1 - y + y * x.sin(M * A / h) : 1) * (0 < O ? 1 : -1) * Math.pow(x.abs(O), s) * .3 * t * (A < n ? A / n : A < n + $ ? 1 - (A - n) / $ * (1 - g) : A < n + $ + r ? g : A < C - v ? (C - A - v) / a * g : 0),
            O = v ? O / 2 + (v > A ? 0 : (A < C - v ? 1 : (C - A) / v) * e[A - v | 0] / 2) : O),
            I += (B = (o += c += i) * x.cos(u * j++)) - B * f * (1 - 1e9 * (x.sin(A) + 1) % 2),
            S && ++S > p && (o += d,
            k += d,
            S = 0),
            !h || ++R % h || (o = k,
            c = E,
            S || (S = 1));
        return (t = w.createBuffer(1, C, m)).getChannelData(0).set(e),
        (o = w.createBufferSource()).buffer = t,
        o.connect(w.destination),
        o.start(),
        o
    }
    ,
    w = new AudioContext;
    let g = "yes" === u("sound", "yes");
    const $ = {
        gameOver: [, , 20, .04, , .6, , 1.31, , , -990, .06, .17, , , .04, .07],
        shot: [, , 150, .05, , .05, , 1.3, , , , , , 3],
        counter: [, .1, 75, .03, .08, .17, 1, 1.88, 7.83, , , , , .4],
        click: [, , 537, .02, .02, .22, 1, 1.59, -6.98, 4.97],
        target: [1.03, , 754, .03, .02, .09, , 1.58, 36.1, -14, , .01, -.01, .7, , , , .44, .03]
    }
      , y = t=>{
        g && b(...$[t])
    }
      , x = ({id: t, left: e, top: o, rotation: n, scale: r})=>`<div\n  id="${t}"\n  class="arrow"\n  style="transform:rotate(${n}deg);left:${e}px;top:${o}px;"\n>\n  <svg viewBox="0 0 85 470" style="transform:scaleY(${r});">\n    <polygon\n      fill="#E6E9ED"\n      points="85.32601928710938,127.98799896240234 51.201019287109375,149.33100128173828 33.516021728515625,149.33100128173828 0,127.98799896240234 0,21.334999084472656 85.32601928710938,21.334999084472656 "\n    />\n    <path\n      fill="#FFCE54"\n      d="m50.20101,3.117c-4.155,-4.156 -10.921,-4.156 -15.077,0c-2.093,2.094 -3.124,4.812 -3.124,7.547l0,0l0,394.283l21.326,0l0,-394.252c0.016,-2.734 -1.031,-5.484 -3.125,-7.578z"\n    />\n    <path\n      fill="#ED5564"\n      d="m55.37301,390.666c-4.484,0 -8.812,1.031 -12.718,2.984c-3.891,-1.953 -8.219,-2.984 -12.702,-2.984c-15.703,0 -28.469,12.766 -28.469,28.469c0,25.717 32.141,45.217 35.812,47.357l5.375,3.125l5.375,-3.125c3.655,-2.141 35.796,-21.641 35.796,-47.357c0,-15.688 -12.766,-28.469 -28.469,-28.469z"\n    />\n  </svg>\n</div>`
      , m = ({id: t, fill: e, left: o, top: n, rotation: r, scale: a})=>`<div\n  id="${t}"\n  class="bow"\n  style="transform:rotate(${r}deg);left:${o}px;top:${n}px"\n>\n  <svg viewBox="0 0 190 491" style="transform:scaleX(${a});">\n    <rect x="12" fill="black" width="21" height="500"/>\n    <path\n      fill="${e}"\n      d="m170.75487,205.321c0,0 20.5,-29.858 19.406,-52.482c-4,-83.169 -107.668,-88.497 -159.557,-152.839l-30.515,0c-4.156,64.467 138.823,93.419 141.964,146.448c1.438,24.421 -13.984,53.857 -13.984,53.857l0,90.028c0,0 15.421,29.437 13.984,53.857c-3.141,53.029 -146.12,81.982 -141.964,146.449l30.515,0c51.889,-64.342 155.557,-69.67 159.557,-152.84c1.094,-22.623 -19.406,-52.482 -19.406,-52.482l0,-79.996z"\n    />\n  </svg>\n</div>`
      , M = ({index: t, type: e})=>`<div class="case ${e}">\n  ${x({
        id: `ac-${t}-1`,
        left: 5,
        top: -50,
        rotation: -10,
        scale: 1
    })}\n  ${x({
        id: `ac-${t}-2`,
        left: 17,
        top: -50,
        rotation: 0,
        scale: 1
    })}\n  ${x({
        id: `ac-${t}-3`,
        left: 29,
        top: -50,
        rotation: 10,
        scale: 1
    })}\n  </div>`
      , E = [{
        w: 140,
        h: 245,
        p: [[54, 0], [36, 35], [71, 35], [18, 70], [53, 70], [88, 70], [0, 105], [35, 105], [70, 105], [105, 105], [18, 140], [53, 140], [88, 140], [36, 175], [71, 175], [54, 210]]
    }, {
        w: 105,
        h: 105,
        p: [[35, 0], [35, 35], [35, 70], [0, 35], [70, 35]]
    }, {
        w: 175,
        h: 175,
        a: !0,
        p: [[155, 68], [145, 108], [117, 140], [78, 154], [36, 149], [2, 126], [-17, 88], [-17, 47], [2, 9], [36, -14], [78, -19], [117, -5], [145, 27]]
    }, {
        w: 175,
        h: 175,
        p: [[70, 0], [35, 35], [105, 35], [0, 70], [70, 70], [140, 70], [35, 105], [105, 105], [70, 140]]
    }, {
        w: 140,
        h: 140,
        a: !0,
        p: [[0, 0], [35, 0], [70, 0], [105, 0], [0, 35], [105, 35], [0, 70], [105, 70], [0, 105], [35, 105], [70, 105], [105, 105]]
    }, {
        w: 35,
        h: 105,
        p: [[0, 0], [0, 35], [0, 70]]
    }, {
        w: 175,
        h: 175,
        a: !0,
        p: [[0, 70], [35, 70], [70, 70], [105, 70], [140, 70], [70, 0], [70, 35], [70, 105], [70, 140]]
    }, {
        w: 105,
        h: 105,
        p: [[35, 35], [0, 35], [70, 35], [35, 0], [35, 70]]
    }]
      , k = (t="",e=0,o=0)=>`<div class="target" id=${t} style="left:${e}px;top:${o}px"></div>`
      , I = (e=0)=>{
        if (e >= E.length)
            return `<div class="targets" style="width:105px;height:210px;">\n  ${new Array(6).fill(null).map(((t,e)=>`<div class="target-spe ${e % 2 == 0 ? "left" : "right"}" style="top:${35 * e}px">\n      ${new Array(3).fill(null).map(((t,o)=>k(`t-${o + 3 * e}`, 35 * o, 0))).join("")}\n      </div>`)).join("")}\n  </div>`;
        const {w: o, h: n, p: r, a=!1} = E[e]
          , l = a || 1 === c(0, 1);
        let s = "";
        if (l) {
            const t = c(0, 1);
            s = `--s:${c(2, 5)}s;--i:${t ? "0" : "359"}deg;--f:${t ? "359" : "0"}deg;`
        }
        return t("html").style.cssText = s,
        `<div class="targets ${l ? " a" : ""}" style="width:${o}px;height:${n}px;">\n  ${r.map((([t,e],o)=>k(`t-${o}`, t, e))).join("")}\n  </div>`
    }
    ;
    let j, A = 0, S = !1;
    const R = "hide";
    let L = !1;
    const O = [{
        animate: !1,
        angle: 0,
        point: {
            x: 0,
            y: 0
        },
        score: 0,
        arrows: 0,
        hasArrow: !0
    }, {
        animate: !1,
        angle: 0,
        point: {
            x: 0,
            y: 0
        },
        score: 0,
        arrows: 0,
        hasArrow: !0
    }]
      , B = [{
        bow: {
            fill: d[0],
            left: 176,
            top: 542,
            rotation: 270,
            scale: 1
        },
        arrow: {
            left: 195,
            top: 572,
            rotation: 0,
            scale: -1
        }
    }, {
        bow: {
            fill: d[1],
            left: 176,
            top: 40,
            rotation: 270,
            scale: -1
        },
        arrow: {
            left: 195,
            top: 75,
            rotation: 0,
            scale: 1
        }
    }]
      , C = (t,e)=>{
        const o = s(e)
          , n = s(t);
        return {
            top: Math.round(o.top - n.top),
            left: Math.round(o.left - n.left)
        }
    }
      , D = (t=0)=>{
        let e = t % 360;
        return e < 0 && (e += 360),
        Math.round(Math.abs(e))
    }
      , J = (t,e)=>180 * Math.atan2(t.y - e.y, t.x - e.x) / Math.PI
      , T = e=>{
        const {left: o, top: n} = s(t("#control"));
        let r = 0
          , a = 0;
        e instanceof MouseEvent ? (r = e.clientX,
        a = e.clientY) : e instanceof TouchEvent && (r = e.touches[0].clientX,
        a = e.touches[0].clientY);
        return {
            x: Math.round(r - o),
            y: Math.round(a - n)
        }
    }
      , Y = e=>{
        const o = t("#bow-1")
          , {left: n, top: a} = C(t("#control"), o)
          , {width: l} = s(o)
          , c = {
            x: Math.round(n + l / 2),
            y: a
        }
          , i = J(c, e)
          , d = D(i);
        if (d >= 180 && d <= 360) {
            r(o, {
                transform: `rotate(${d}deg)`
            });
            const e = d - 270;
            O[0].angle = e,
            r(t("#arrow-1"), {
                transform: `rotate(${e}deg)`
            })
        }
    }
      , z = ()=>n(t(".score"), `<span>${O[0].score}</span> - <span>${O[1].score}</span>`)
      , N = ()=>[...e(".target")].filter((t=>!a(t, R)))
      , G = (t,e)=>t.x >= e.start.x && t.y >= e.start.y && t.x <= e.end.x && t.y <= e.end.y
      , H = (e,o)=>{
        const n = t(`#arrow-${e}`)
          , {angle: r} = O[e - 1]
          , {x: a, y: l} = ((t,e,o)=>{
            const n = s(e)
              , r = n.width
              , a = n.height
              , l = t * (1 === o ? 1 : -1) * Math.PI / 180;
            return {
                x: n.left + r / 2 + a / 2 * Math.sin(l),
                y: n.top + (2 === o ? a - 20 : 0) + a / 2 - a / 2 * Math.cos(l)
            }
        }
        )(r, n, e)
          , c = s(o)
          , i = {
            start: {
                x: Math.round(c.x),
                y: Math.round(c.y)
            },
            end: {
                x: Math.round(c.x + c.width),
                y: Math.round(c.y + c.height)
            }
        };
        return G({
            x: a - 3,
            y: l
        }, i) || G({
            x: a,
            y: l
        }, i) || G({
            x: a + 3,
            y: l
        }, i)
    }
      , P = (e=1)=>{
        const o = t(`#arrow-${e}`)
          , {angle: s, point: c} = O[e - 1]
          , i = (s - 90) * (Math.PI / 180)
          , d = c.x + 15 * Math.cos(i) * (1 === e ? 1 : -1)
          , p = c.y + 15 * Math.sin(i) * (1 === e ? 1 : -1);
        if (O[e - 1].point = {
            x: d,
            y: p
        },
        r(o, {
            left: `${d}px`,
            top: `${p}px`
        }),
        h = d,
        (b = p) < -100 || h < -50 || b > 832 || h > 462) {
            O[e - 1].animate = !1,
            clearInterval(O[e - 1].interval);
            const a = O[e - 1].arrows > 0;
            if (O[e - 1].hasArrow = a,
            a) {
                const {left: n, top: a} = B[e - 1].arrow;
                r(o, {
                    left: `${n}px`,
                    top: `${a}px`
                }),
                l(t(`#ac-${e}-${O[e - 1].arrows}`), R, "add"),
                O[e - 1].arrows--,
                2 === e && K()
            } else
                r(t(`#bow-${e}`), {
                    transform: `rotate(${B[e - 1].bow.rotation}deg)`
                });
            (()=>{
                const e = O.findIndex((t=>t.score >= 70));
                if (e >= 0) {
                    U(),
                    L = !0;
                    const o = t(".win-ui")
                      , r = 0 === e ? "r" : "b";
                    n(o, `<span>${0 === e ? "RED" : "BLUE"} WIN</span>`),
                    l(o, R, "remove"),
                    l(o, r, "add"),
                    y("gameOver");
                    const a = u("score", {
                        red: 0,
                        blue: 0
                    });
                    a[0 === e ? "red" : "blue"]++,
                    f("score", a)
                } else {
                    const t = N()
                      , e = 0 !== O.filter((t=>t.hasArrow)).length;
                    (0 === t.length || !e) && (U(),
                    W())
                }
            }
            )()
        } else
            (t=>{
                const e = N();
                for (const o of e) {
                    const e = o;
                    H(t, e) && !a(e, R) && (l(e, R, "add"),
                    O[t - 1].score++,
                    z(),
                    y("target"))
                }
            }
            )(e);
        var h, b
    }
      , X = (t=1)=>{
        const {left: e, top: o} = B[t - 1].arrow;
        O[t - 1].point = {
            x: e,
            y: o
        },
        O[t - 1].animate = !0,
        O[t - 1].interval = setInterval((()=>P(t)), 1),
        y("shot")
    }
      , _ = t=>{
        L || S || O[0].animate || !O[0].hasArrow || (Y(T(t)),
        S = !0)
    }
      , q = ()=>{
        L || !S || O[0].animate || (X(),
        S = !1)
    }
      , F = t=>{
        L || !S || O[0].animate || Y(T(t))
    }
      , U = ()=>{
        j && clearInterval(j);
        for (let t = 0; t < O.length; t++)
            O[t].interval && clearInterval(O[t].interval)
    }
      , K = ()=>{
        let e = N();
        const o = [18, 10, 2][A - 1];
        if (L || 0 === e.length)
            return;
        let n = c(0, e.length - 1)
          , l = e[n];
        const s = {
            x: B[1].bow.left,
            y: B[1].bow.top
        };
        let i = 0;
        j = setInterval((()=>{
            L && clearInterval(j);
            const {left: d, top: p} = C(t(".game"), l)
              , h = D(J(s, {
                x: d,
                y: p
            }));
            r(t("#bow-2"), {
                transform: `rotate(${h}deg)`
            });
            const f = h - 270;
            if (O[1].angle = f,
            r(t("#arrow-2"), {
                transform: `rotate(${f}deg)`
            }),
            i++,
            i % o == 0) {
                let t = !0;
                a(l, R) && (e = N(),
                0 !== e.length && (n = c(0, e.length - 1),
                l = e[n],
                t = !1)),
                t && (clearInterval(j),
                X(2))
            }
        }
        ), 100)
    }
      , W = ()=>{
        const e = 3 === A && 1 === c(0, 1) ? 8 : c(0, E.length);
        n(t("#r-target"), I(e)),
        B.forEach((({arrow: e, bow: o},n)=>{
            r(t(`#bow-${n + 1}`), {
                transform: `rotate(${o.rotation}deg)`
            }),
            r(t(`#arrow-${n + 1}`), {
                left: `${e.left}px`,
                top: `${e.top}px`,
                transform: `rotate(${e.rotation}deg)`,
                display: "block"
            })
        }
        ));
        for (let e = 0; e < O.length; e++) {
            O[e].animate = !1,
            O[e].arrows = 2,
            O[e].hasArrow = !0,
            O[e].interval && clearInterval(O[e].interval);
            for (let o = 1; o <= 3; o++)
                l(t(`#ac-${e + 1}-${o}`), R, 3 === o ? "add" : "remove")
        }
        K()
    }
      , Q = ({color: t, score: e, type: o})=>`<div class="pe"><svg viewBox="0 0 24 24">\n    <path fill=${t} d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>\n  </svg>\n  <div id="sc-${o}"  class="pe-sco">${e}</div>\n  </div>`
      , V = {
        Game: ({dificulty: e=1})=>{
            const r = `<div class="game wh jc">\n      <div class="lock-ui wh jc"></div>\n      <div class="win-ui hide wh jc"></div>\n      ${B.map(((t,e)=>`${m(Object.assign({
                id: `bow-${e + 1}`
            }, t.bow))}\n          ${x(Object.assign({
                id: `arrow-${e + 1}`
            }, t.arrow))}\n          ${M({
                index: e + 1,
                type: 0 === e ? "bottom" : "top"
            })}\n        `)).join("")}\n      <div class="score jc"></div>\n      <button id="exit">EXIT</button>\n      <div id="r-target"></div>\n      <div id="control"></div>\n  </div>`;
            n(t(`#${i}`), r),
            (e=>{
                A = e,
                [["mousedown", _], ["mouseup", q], ["mousemove", F], ["touchstart", _], ["touchend", q], ["touchmove", F], ["mouseleave", q]].forEach((e=>o(t("#control"), e[0], e[1]))),
                o(t("#exit"), "click", (()=>{
                    U(),
                    Z("Lobby")
                }
                )),
                L = !1;
                for (let t = 0; t < O.length; t++)
                    O[t].score = 0;
                z();
                let r = 3;
                const a = setInterval((()=>{
                    n(t(".lock-ui"), String(r)),
                    y("counter"),
                    r--,
                    r < 0 && (l(t(".lock-ui"), R, "add"),
                    clearInterval(a),
                    W())
                }
                ), 1e3)
            }
            )(e)
        }
        ,
        Lobby: ()=>{
            const r = `<div class="lobby wh">\n  <button title="Sounds" class="lobby-so jc">${g ? "🔈" : "🔇"}</button>\n  <a title="Jorge Rubiano" ="" target="_blank" rel="noopener noreferrer" class="lobby-ab jc">👨🏻‍💻</a>\n  <h1>ARCHERY MASTER</h1>\n  <div class="lobby-btn jc">\n      <p>\n        Load your bow and hit 70 targets before your opponent!\n      </p>\n      <div class="jc">\n        <button>EASY</button>\n        <button>MEDIUM</button>\n        <button>HARD</button>\n      </div>\n    </div>\n    <div class="lobby-pe">\n      ${Q({
                color: d[0],
                score: 0,
                type: "red"
            })}\n      ${Q({
                color: d[1],
                score: 0,
                type: "blue"
            })}\n    </div>\n    <a href="" target="_blank" rel="noopener noreferrer" class="lobby-co"></a>\n  </div>`;
            n(t(`#${i}`), r),
            [...e(".lobby-btn button")].forEach(((t,e)=>{
                o(t, "click", (()=>{
                    Z("Game", {
                        dificulty: e + 1
                    })
                }
                ))
            }
            )),
            o(t(".lobby-so"), "click", (()=>{
                var e;
                e = t(".lobby-so"),
                g = !g,
                f("sound", g ? "yes" : "no"),
                n(e, g ? "🔈" : "🔇")
            }
            ));
            const a = u("score", {
                red: 0,
                blue: 0
            });
            n(t("#sc-red"), a.red),
            n(t("#sc-blue"), a.blue)
        }
    }
      , Z = (t="Lobby",e={})=>{
        V[t](e)
    }
    ;
    n(t("#root"), `<div\n    id="${i}"\n    style="overflow: hidden;width:412px;height:732px"\n  ></div>`),
    o(document, "contextmenu", (t=>t.preventDefault()));
    o(window, "click", (t=>{
        const e = t.target;
        e && ["a", "button"].includes(e.tagName.toLowerCase()) && y("click")
    }
    )),
    Z("Lobby"),
    console.log("%cGame developed by Jorge Rubiano.", "color:red; font-size:20px; font-weight: bold; -webkit-text-stroke: 1px black; border-radius:10px; padding: 20px; background-color: black;")
}
)();
