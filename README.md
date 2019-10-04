# node-keyboard-input
This is an example of bringing input from a physical keyboard into your balena project.

The application will run a web server on port 80 that prints the input received from the keyboard in real time using socket.io.

**Note:** the vendor and product IDs specified in server.js will need to be updated to match that of your own hardware in order for the driver to know which device to open. You can do this by setting environment variables for the application or device called `VENDOR_ID` and `PRODUCT_ID`, where the values are hex string (eg. `12ab`).
