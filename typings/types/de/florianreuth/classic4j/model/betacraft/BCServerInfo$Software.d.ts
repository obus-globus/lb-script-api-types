import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BCServerInfo$Software extends Record {
    constructor(name: string, version: string)
    // private name: string;
    // private version: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
    version(): string;
}