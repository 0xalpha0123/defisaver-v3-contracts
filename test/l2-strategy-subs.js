const {
    subToAaveProxy,
    updateAaveProxy,
} = require('./utils-strategies');

const {
    addrs,
    network,
} = require('./utils');

const subAaveV3L2AutomationStrategy = async (
    proxy,
    minRatio,
    maxRatio,
    optimalRatioBoost,
    optimalRatioRepay,
    boostEnabled,
    regAddr = addrs[network].REGISTRY_ADDR,
) => {
    let subInput = '0x';

    subInput = subInput.concat(minRatio.padStart(32, '0'));
    subInput = subInput.concat(maxRatio.padStart(32, '0'));
    subInput = subInput.concat(optimalRatioBoost.padStart(32, '0'));
    subInput = subInput.concat(optimalRatioRepay.padStart(32, '0'));
    subInput = subInput.concat(boostEnabled ? '01' : '00');

    const subId = await subToAaveProxy(proxy, subInput, regAddr);

    let subId1 = '0';
    let subId2 = '0';

    if (boostEnabled) {
        subId1 = (parseInt(subId, 10) - 1).toString();
        subId2 = subId;
    } else {
        subId1 = subId;
        subId2 = '0';
    }

    console.log('Subs: ', subId, subId2);

    return { firstSub: subId1, secondSub: subId2 };
};

const updateAaveV3L2AutomationStrategy = async (
    proxy,
    subId1,
    subId2,
    minRatio,
    maxRatio,
    optimalRatioBoost,
    optimalRatioRepay,
    boostEnabled,
    regAddr = addrs[network].REGISTRY_ADDR,
) => {
    let subInput = '0x';

    subInput = subInput.concat(subId1.toString().padStart(8, '0'));
    subInput = subInput.concat(subId2.toString().padStart(8, '0'));

    subInput = subInput.concat(minRatio.padStart(32, '0'));
    subInput = subInput.concat(maxRatio.padStart(32, '0'));
    subInput = subInput.concat(optimalRatioBoost.padStart(32, '0'));
    subInput = subInput.concat(optimalRatioRepay.padStart(32, '0'));
    subInput = subInput.concat(boostEnabled ? '01' : '00');

    const subId = await updateAaveProxy(proxy, subInput, regAddr);

    if (subId2 === '0' && boostEnabled === true) {
        // eslint-disable-next-line no-param-reassign
        subId2 = subId;
    }

    return { firstSub: subId1, secondSub: subId2 };
};

module.exports = {
    subAaveV3L2AutomationStrategy,
    updateAaveV3L2AutomationStrategy,
};