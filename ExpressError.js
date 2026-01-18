//Now i change the Code make this code Improved Version Industry Standard
class ExpressError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

module.exports = ExpressError;
