// Large Shirts 
function make_shirt(size, message) {
    if (size === void 0) { size = 'L'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size, " and it has the message: \"").concat(message, "\""));
}
make_shirt();
make_shirt('M');
make_shirt('S', 'Custom Message');
