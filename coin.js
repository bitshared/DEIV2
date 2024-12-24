const cpu = {
    ch: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    enc: function (mz) {
        let ec = (mz + "=").replace(/-/g, '+').replace(/_/g, '/').split('').
            map(i => this.ch.indexOf(i).toString(2).padStart(6, 0)).join("").
            match(/.{8}/g).map(i => parseInt(i, 2).toString(16).padStart(2, 0)).join("");
        return ec
    },
    dec: function (dz) {
        let dc = dz.match(/.{2}/g).map(i => parseInt(i, 16).toString(2).padStart(8, 0)).join('').
            match(/.{6}/g).map(i => parseInt(i, 2)).
            map(i => this.ch[i]).
            join("").replace("+", '-').replace("/", '_')
        return dc
    }
}

let ec = cpu.enc("b")
let dc =cpu.dec(ec)

console.log(ec,dc)