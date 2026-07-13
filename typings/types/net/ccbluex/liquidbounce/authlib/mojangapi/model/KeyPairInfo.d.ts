import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class KeyPairInfo extends Record {
    constructor(privateKey: string, publicKey: string)
    // private privateKey: string;
    /*not mapped: */ privateKey(): string;
    // private publicKey: string;
    /*not mapped: */ publicKey(): string;
    component1(): string;
    component2(): string;
    copy(privateKey: string, publicKey: string): KeyPairInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}