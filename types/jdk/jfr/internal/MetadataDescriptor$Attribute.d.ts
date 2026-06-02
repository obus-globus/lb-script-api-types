import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MetadataDescriptor$Attribute extends Record {
    constructor(name: string, value: string)
    // private name: string;
    // private value: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
    value(): string;
}