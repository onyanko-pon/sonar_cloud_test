module.exports = (count) => {
    const res = []
    for (let i = 0; i < count; i++) {
        if (res.length <= 1) {
            res.push(1)
            continue
        }
        res.push(res[res.length-1] + res[res.length-2])
    }

    return res
}