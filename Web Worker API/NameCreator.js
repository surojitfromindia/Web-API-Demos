let y = 0;
function call() {
  setInterval(() => {
    y++;
    postMessage(y);
  }, 500);
}

call();
