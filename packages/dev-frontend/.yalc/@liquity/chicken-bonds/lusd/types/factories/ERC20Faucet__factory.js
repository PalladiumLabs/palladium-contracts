"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20Faucet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "string",
                name: "_symbol",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "_tapAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_tapPeriod",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "DOMAIN_SEPARATOR",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "lastTapped",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "nonces",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "tap",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "tapAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "tapPeriod",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x6101806040523480156200001257600080fd5b506040516200180d3803806200180d8339810160408190526200003591620002f9565b8380604051806040016040528060018152602001603160f81b815250868681600390805190602001906200006b92919062000186565b5080516200008190600490602084019062000186565b5050825160209384012082519284019290922060e08390526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818901819052818301979097526060810194909452608080850193909352308483018190528151808603909301835260c09485019091528151919096012090529290925261012052506200012090503362000134565b610140919091526101605250620003af9050565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620001949062000373565b90600052602060002090601f016020900481019282620001b8576000855562000203565b82601f10620001d357805160ff191683800117855562000203565b8280016001018555821562000203579182015b8281111562000203578251825591602001919060010190620001e6565b506200021192915062000215565b5090565b5b8082111562000211576000815560010162000216565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200025457600080fd5b81516001600160401b03808211156200027157620002716200022c565b604051601f8301601f19908116603f011681019082821181831017156200029c576200029c6200022c565b81604052838152602092508683858801011115620002b957600080fd5b600091505b83821015620002dd5785820183015181830184015290820190620002be565b83821115620002ef5760008385830101525b9695505050505050565b600080600080608085870312156200031057600080fd5b84516001600160401b03808211156200032857600080fd5b620003368883890162000242565b955060208701519150808211156200034d57600080fd5b506200035c8782880162000242565b604087015160609097015195989097509350505050565b600181811c908216806200038857607f821691505b602082108103620003a957634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e051610100516101205161014051610160516113ea620004236000396000818161027c0152610e45015260008181610211015261079201526000610bbe01526000610c0d01526000610be801526000610b4101526000610b6b01526000610b9501526113ea6000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c8063715018a6116100b8578063a457c2d71161007c578063a457c2d7146102c1578063a9059cbb146102d4578063d505accf146102e7578063dd62ed3e146102fa578063f2fde38b1461030d578063fd2210311461032057600080fd5b8063715018a61461025c5780637ecebe0014610264578063844c827a146102775780638da5cb5b1461029e57806395d89b41146102b957600080fd5b80633644e5151161010a5780633644e515146101bc57806339509351146101c457806340c10f19146101d75780634865701b146101ec578063542522071461020c57806370a082311461023357600080fd5b806306fdde0314610147578063095ea7b31461016557806318160ddd1461018857806323b872dd1461019a578063313ce567146101ad575b600080fd5b61014f610328565b60405161015c9190611170565b60405180910390f35b6101786101733660046111e1565b6103ba565b604051901515815260200161015c565b6002545b60405190815260200161015c565b6101786101a836600461120b565b6103d2565b6040516012815260200161015c565b61018c6103f6565b6101786101d23660046111e1565b610405565b6101ea6101e53660046111e1565b610427565b005b61018c6101fa366004611247565b60086020526000908152604090205481565b61018c7f000000000000000000000000000000000000000000000000000000000000000081565b61018c610241366004611247565b6001600160a01b031660009081526020819052604090205490565b6101ea610468565b61018c610272366004611247565b61049e565b61018c7f000000000000000000000000000000000000000000000000000000000000000081565b6007546040516001600160a01b03909116815260200161015c565b61014f6104be565b6101786102cf3660046111e1565b6104cd565b6101786102e23660046111e1565b610548565b6101ea6102f5366004611269565b610556565b61018c6103083660046112dc565b6106ba565b6101ea61031b366004611247565b6106e5565b6101ea610780565b6060600380546103379061130f565b80601f01602080910402602001604051908101604052809291908181526020018280546103639061130f565b80156103b05780601f10610385576101008083540402835291602001916103b0565b820191906000526020600020905b81548152906001019060200180831161039357829003601f168201915b5050505050905090565b6000336103c88185856107c8565b5060019392505050565b6000336103e08582856108ec565b6103eb858585610966565b506001949350505050565b6000610400610b34565b905090565b6000336103c881858561041883836106ba565b6104229190611343565b6107c8565b6007546001600160a01b0316331461045a5760405162461bcd60e51b815260040161045190611369565b60405180910390fd5b6104648282610c5e565b5050565b6007546001600160a01b031633146104925760405162461bcd60e51b815260040161045190611369565b61049c6000610d3d565b565b6001600160a01b0381166000908152600560205260408120545b92915050565b6060600480546103379061130f565b600033816104db82866106ba565b90508381101561053b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610451565b6103eb82868684036107c8565b6000336103c8818585610966565b834211156105a65760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610451565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105d58c610d8f565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061063082610db7565b9050600061064082878787610e05565b9050896001600160a01b0316816001600160a01b0316146106a35760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610451565b6106ae8a8a8a6107c8565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6007546001600160a01b0316331461070f5760405162461bcd60e51b815260040161045190611369565b6001600160a01b0381166107745760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610451565b61077d81610d3d565b50565b600061078a610e2d565b90506107b6337f0000000000000000000000000000000000000000000000000000000000000000610c5e565b33600090815260086020526040902055565b6001600160a01b03831661082a5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610451565b6001600160a01b03821661088b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610451565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006108f884846106ba565b9050600019811461096057818110156109535760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610451565b61096084848484036107c8565b50505050565b6001600160a01b0383166109ca5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610451565b6001600160a01b038216610a2c5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610451565b6001600160a01b03831660009081526020819052604090205481811015610aa45760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610451565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610adb908490611343565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b2791815260200190565b60405180910390a3610960565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610b8d57507f000000000000000000000000000000000000000000000000000000000000000046145b15610bb757507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b90565b6001600160a01b038216610cb45760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610451565b8060026000828254610cc69190611343565b90915550506001600160a01b03821660009081526020819052604081208054839290610cf3908490611343565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b03811660009081526005602052604090208054600181018255905b50919050565b60006104b8610dc4610b34565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610e1687878787610ecd565b91509150610e2381610fba565b5095945050505050565b336000908152600860205260409020544290610e6a907f000000000000000000000000000000000000000000000000000000000000000090611343565b811015610c5b5760405162461bcd60e51b815260206004820152602b60248201527f45524332304661756365743a206d7573742077616974206265666f726520746160448201526a383834b7339030b3b0b4b760a91b6064820152608401610451565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610f045750600090506003610fb1565b8460ff16601b14158015610f1c57508460ff16601c14155b15610f2d5750600090506004610fb1565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610f81573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610faa57600060019250925050610fb1565b9150600090505b94509492505050565b6000816004811115610fce57610fce61139e565b03610fd65750565b6001816004811115610fea57610fea61139e565b036110375760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610451565b600281600481111561104b5761104b61139e565b036110985760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610451565b60038160048111156110ac576110ac61139e565b036111045760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610451565b60048160048111156111185761111861139e565b0361077d5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610451565b600060208083528351808285015260005b8181101561119d57858101830151858201604001528201611181565b818111156111af576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146111dc57600080fd5b919050565b600080604083850312156111f457600080fd5b6111fd836111c5565b946020939093013593505050565b60008060006060848603121561122057600080fd5b611229846111c5565b9250611237602085016111c5565b9150604084013590509250925092565b60006020828403121561125957600080fd5b611262826111c5565b9392505050565b600080600080600080600060e0888a03121561128457600080fd5b61128d886111c5565b965061129b602089016111c5565b95506040880135945060608801359350608088013560ff811681146112bf57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156112ef57600080fd5b6112f8836111c5565b9150611306602084016111c5565b90509250929050565b600181811c9082168061132357607f821691505b602082108103610db157634e487b7160e01b600052602260045260246000fd5b6000821982111561136457634e487b7160e01b600052601160045260246000fd5b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052602160045260246000fdfea264697066735822122013c16e63e72b64ecde21b80f433e74c649d72407d978cfcbe607e337a200af8264736f6c634300080d0033";
const isSuperArgs = (xs) => xs.length > 1;
class ERC20Faucet__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_name, _symbol, _tapAmount, _tapPeriod, overrides) {
        return super.deploy(_name, _symbol, _tapAmount, _tapPeriod, overrides || {});
    }
    getDeployTransaction(_name, _symbol, _tapAmount, _tapPeriod, overrides) {
        return super.getDeployTransaction(_name, _symbol, _tapAmount, _tapPeriod, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ERC20Faucet__factory = ERC20Faucet__factory;
ERC20Faucet__factory.bytecode = _bytecode;
ERC20Faucet__factory.abi = _abi;
