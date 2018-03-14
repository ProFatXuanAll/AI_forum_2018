module.exports = {
    protocol: 'http',
    host: 'localhost',
    port: '80',
    root: '/',
    static: '/',
    url() {
        const port = this.port === '80' ? '' : this.port === '443' ? '' : `:${ this.port }`;
        const rootPath = this.root === '/' ? '' : this.root;
        return `${ this.protocol }://${ this.host }${ port }${ rootPath }`
    },
    staticUrl() {
        const port = this.port === '80' ? '' : this.port === '443' ? '' : `:${ this.port }`;
        const staticPath = this.static === '/' ? '' : this.static;
        return `${ this.protocol }://${ this.host }${ port }${ staticPath }`
    },
};
