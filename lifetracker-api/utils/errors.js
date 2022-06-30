class ExpressError extends Error {
    constructor(message, status) {
      super()
      this.message = message
      this.status = status
    }
  }
  
  class NotFoundError extends ExpressError {
    constructor(message = "You had one job...") {
      super(message, 404)
    }
  }
  
  class BadRequestError extends ExpressError {
    constructor(message = "Try Again LOL") {
      super(message, 400)
    }
  }
  
  export{
    ExpressError,
     NotFoundError,
     BadRequestError,
  }