"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const DcentCLIConnector = require("dcent-cli-connector");
const fs = require("fs");
class Sign extends core_1.Command {
    constructor() {
        super(...arguments);
        this._signature = "";
        this._pubkey = "";
    }
    async run() {
        const { args, flags } = await this.parse(Sign);
        // parse arguments and retrieve transaction
        let tx = this.readTransaction(args.input_file);
        // sign the transaction 
        await this.signTransaction(tx);
        let output = {
            signature: this._signature,
            pubkey: this._pubkey
        };
        try {
            fs.writeFileSync(args.output_file, JSON.stringify(output, null, 4));
            console.log(`Transaction signed and written to ${args.output_file} successfully!`);
            return;
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    }
    readTransaction(file) {
        try {
            let payload = JSON.parse(fs.readFileSync(file, "utf8"));
            return payload["transaction"];
        }
        catch (e) {
            console.error(`File ${file} does not exist! Please ensure that the payload file is in the root directory and that the file name is spelled correctly.`);
            process.exit(1);
        }
    }
    async signTransaction(transaction) {
        try {
            // init the hardware wallet instance
            await DcentCLIConnector.initialize();
            await DcentCLIConnector.info();
            await DcentCLIConnector.getDeviceInfo();
            await DcentCLIConnector.setLabel('IoTrust');
            const accountInfos = [
                {
                    coin_group: DcentCLIConnector.coinGroup.ETHEREUM,
                    coin_name: DcentCLIConnector.coinName.ETHEREUM,
                    label: 'ETH-01',
                    address_path: "m/44'/60'/0'/0/0",
                    balance: '0 ETH',
                },
            ];
            await DcentCLIConnector.syncAccount(accountInfos);
            // setting up the transaction
            var transactionJson = {
                unsignedTx: transaction,
                path: `m/44'/3030'/0'`,
                symbol: 'HBAR',
                decimals: '8',
            };
            // signing 
            let response = await DcentCLIConnector.getHederaSignedTransaction(transactionJson);
            // extracting the signature and pubkey
            this._signature = response["body"]["parameter"]["signed_tx"];
            this._pubkey = response["body"]["parameter"]["pubkey"];
            DcentCLIConnector.finalize();
            return;
        }
        catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
}
exports.default = Sign;
Sign.description = `CLI tool to sign HTS transaction with D'cent wallet`;
Sign.flags = {
    // flag with a value (-n, --name=VALUE)
    name: core_1.Flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: core_1.Flags.boolean({ char: 'f' }),
    // --version flag to show CLI Version
    version: core_1.Flags.version({ char: "v" }),
    // --help flag to show CLI version
    help: core_1.Flags.help({ char: "h" })
};
// fixing argument types
Sign.args = [
    {
        name: 'input_file',
        description: "File path for input file ",
        required: true
    },
    {
        name: "output_file",
        description: "File path for output file",
        required: true
    }
];
