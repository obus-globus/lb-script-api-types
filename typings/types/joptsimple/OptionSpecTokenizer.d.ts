import type { AbstractOptionSpec } from '../joptsimple/AbstractOptionSpec.d.ts'
import type { OptionParser } from '../joptsimple/OptionParser.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class OptionSpecTokenizer extends Object {
    constructor(arg0: string)
    // private index: number;
    // private specification: string;
    // private adjustForPosixlyCorrect(arg0: OptionParser): void;
    configure(arg0: OptionParser): void;
    // private handleArgumentAcceptingOption(arg0: string): AbstractOptionSpec<Object>;
    // private handleReservedForExtensionsToken(): AbstractOptionSpec<Object>;
    hasMore(): boolean;
    next(): AbstractOptionSpec<Object>;
}