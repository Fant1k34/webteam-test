export function supportsCssVars() {
    return (
        window.CSS &&
        window.CSS.supports &&
        window.CSS.supports('--wt-check-css-vars-support: #fff')
    )
}
export function createLink(b) {
    var c =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'stylesheet',
        a = document.createElement('link')
    a.setAttribute('href', b),
        a.setAttribute('rel', c),
        document.head.appendChild(a)
}
