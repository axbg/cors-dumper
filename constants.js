const PORT = "";

const configCheck = () => {
    if (!PORT || PORT === "") {
        console.log("You forgot to mention a port in constants.js file.");
    }
}

module.exports = {
    PORT,
    configCheck
}