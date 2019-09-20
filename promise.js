class Promise {
  constructor(fn) {
    this.state = 'pending';
    this.value = '';

    let resolve = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
      }
    }
    let reject = value => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.value = value;
      }
    }

    try {
      fn(resolve, reject);
    } catch(e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    switch(this.state) {
      case 'fulfilled':
        onFulfilled();
        break;
      case 'rejected':
        onRejected();
        break;
      default:
    }
  }
}
