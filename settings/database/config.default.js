module.exports = {
    host: '',
    port: '',
    account: '',
    password: '',
    database: '',
    url() {
        return `mongodb://${this.account}:${this.password}@${this.host}:${this.port}/${this.database}`;
    }
};
