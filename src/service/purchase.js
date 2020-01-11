import Web3 from '../Web3';
import PurchaseStorage from '../../build/contracts/Purchase.json'
import contract from 'truffle-contract';

const PurchaseStorageContract = contract(PurchaseStorage);
let purchaseInstance = new Web3.eth.Contract(PurchaseStorageContract.abi, PurchaseStorageContract.networks[100].address);

let confirmPurchase = async () => {
    try {
   
        const accounts = await Web3.eth.getAccounts();
        const res = await purchaseInstance.methods.confirmPurchase()
            .send({
                from: accounts[1],
                value:3000000000000000000
            });
        return Promise.resolve(res);
    } catch (err) {
        return Promise.reject(err);
    }
};


let confirmReceived = async () => {
    try {
   
        const accounts = await Web3.eth.getAccounts();
        const res = await purchaseInstance.methods.confirmReceived()
            .send({
                from: accounts[1]
            });
        return Promise.resolve(res);
    } catch (err) {
        return Promise.reject(err);
    }
};

let cancel = async () => {
    try {
   
        const accounts = await Web3.eth.getAccounts();
        const res = await purchaseInstance.methods.cancel()
            .send({
                from: accounts[0],
            });
        return Promise.resolve();
    } catch (err) {
        return Promise.reject(err);
    }
};
// eslint-disable-next-line import/prefer-default-export
export {
    cancel, confirmReceived, confirmPurchase,
};