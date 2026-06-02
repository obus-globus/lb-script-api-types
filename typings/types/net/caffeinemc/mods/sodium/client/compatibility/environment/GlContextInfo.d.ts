import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class GlContextInfo extends Record {
    static create(): GlContextInfo;
    constructor(vendor: string, renderer: string, version: string)
    // private renderer: string;
    // private vendor: string;
    // private version: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    renderer(): string;
    toString(): string;
    vendor(): string;
    version(): string;
}