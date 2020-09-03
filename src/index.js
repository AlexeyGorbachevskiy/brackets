

module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 !== 0) {
        return false
    }

    let out=str.split('')
    for (let i = 0; i < out.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (out[i] === bracketsConfig[j][0] && out[i + 1] === bracketsConfig[j][1]) {
                out.splice(i, 2)
                i-=2
            }
        }
    }

    return out.length===0
}
