var data = [{
    title: "HH02"
}, {
    title: "HH03"
}, {
    title: "HH04"
}, {
    title: "HH02"
}, {
    title: "HH07"
}, {
    title: "HH08"
}, {
    title: "HH08"
}, {
    title: "HH10"
}, {
    title: "HH02"
}, {
    title: "HH11"
}]

let final = [...data.reduce((op, inp) => {
    let title = inp.title
    op.set(title, (op.get(title) || 0) + 1)
    return op
}, new Map()).entries()].filter(([_, repeat]) => repeat > 1).map(([title, repeat]) => ({
    title,
    repeat
}))

console.log(final)
