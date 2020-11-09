
const { expect } = require("chai");

const { getAssetInfo } = require('defisaver-tokens');

const {
    getAddrFromRegistry,
    getProxy,
    redeploy,
    send,
    nullAddress,
    REGISTRY_ADDR,
} = require('../utils');


describe("Subscriptions", function() {

    let proxy, subAddr;

    before(async () => {

        await redeploy("Subscriptions");

        this.timeout(40000);

        proxy = await getProxy(senderAcc.address);
        subAddr = await getAddrFromRegistry('Subscriptions');
    
    })

    // string memory _name,
    //     bytes32[] memory _triggerIds,
    //     bytes32[] memory _actionIds,
    //     uint8[][] memory _paramMapping


    it('...should create a new template', async () => {

        const SubscriptionProxy = await ethers.getContractFactory("SubscriptionProxy");

        const functionData = SubscriptionProxy.interface.encodeFunctionData(
            "createStrategy",
             []
        );

        await proxy['execute(address,bytes)'](subAddr, functionData);
    });

    //     uint _templateId,
    //     bool _active,
    //     bytes[][] memory _actionData,
    //     bytes[][] memory _triggerData

    it('...should create a new strategy', async () => {

        const SubscriptionProxy = await ethers.getContractFactory("SubscriptionProxy");

        const functionData = SubscriptionProxy.interface.encodeFunctionData(
            "createStrategy",
             []
        );

    });

    it('...should create a new strategy and a new template', async () => {

        const SubscriptionProxy = await ethers.getContractFactory("SubscriptionProxy");

        const functionData = SubscriptionProxy.interface.encodeFunctionData(
            "createStrategy",
             []
        );

    });

    it('...should update a strategy', async () => {

        const SubscriptionProxy = await ethers.getContractFactory("SubscriptionProxy");

        const functionData = SubscriptionProxy.interface.encodeFunctionData(
            "createStrategy",
             []
        );

    });

    it('...should delete a strategy', async () => {

        const SubscriptionProxy = await ethers.getContractFactory("SubscriptionProxy");

        const functionData = SubscriptionProxy.interface.encodeFunctionData(
            "createStrategy",
             []
        );

    });

});