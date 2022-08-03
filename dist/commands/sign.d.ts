import { Command } from '@oclif/core';
export default class Sign extends Command {
    static description: string;
    static flags: {
        name: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        force: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        version: import("@oclif/core/lib/interfaces").BooleanFlag<void>;
        help: import("@oclif/core/lib/interfaces").BooleanFlag<void>;
    };
    static args: {
        name: string;
        description: string;
        required: boolean;
    }[];
    private _signature;
    private _pubkey;
    run(): Promise<void>;
    private readTransaction;
    private signTransaction;
}
