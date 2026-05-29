const validatorPenderConfig = { serverId: 5105, active: true };

const validatorPenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_5105() {
    return validatorPenderConfig.active ? "OK" : "ERR";
}

console.log("Module validatorPender loaded successfully.");