module.exports = {
    protocol: 'http://',
    host: '',
    reverseProxy: '',
    port: '',
    root: '',
    static: '',
    url() {
        return `${ this.protocol }${ this.host }${ this.reverseProxy }${ this.root }`
    }
    staticUrl() {
        return `${ this.protocol }${ this.host }${ this.reverseProxy }${ this.static }`
    }
};
