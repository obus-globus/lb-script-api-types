import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ApplicationInfo extends Object {
    constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: JavaMap<string, string>)
    readonly additionalInfo: JavaMap<string, string>;
    readonly name: string;
    readonly timestamp: number;
    readonly vendor: string;
    readonly version: string;
    equals(arg0: Object | null): boolean;
    getAdditionalInfo(): JavaMap<string, string>;
    getName(): string;
    getTimestamp(): number;
    getVendor(): string;
    getVersion(): string;
    hashCode(): number;
    toString(): string;
}