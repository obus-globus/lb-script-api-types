import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NativeModuleLister$NativeModuleVersion extends Record {
    constructor(description: string, version: string, company: string)
    // private company: string;
    // private description: string;
    // private version: string;
    company(): string;
    description(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    version(): string;
}