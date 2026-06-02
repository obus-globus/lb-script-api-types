import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClientProtocolVersion extends Record {
    constructor(name: string, version: number)
    // private name: string;
    /*not mapped: */ name(): string;
    // private version: number;
    /*not mapped: */ version(): number;
    component1(): string;
    component2(): number;
    copy(name: string, version: number): ClientProtocolVersion;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}