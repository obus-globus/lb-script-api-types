import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PublicKeys extends Record {
    constructor(profilePropertyKeys: string[], playerCertificateKeys: string[], authenticationKeys: string[] | null)
    // private authenticationKeys: string[] | null;
    /*not mapped: */ authenticationKeys(): string[] | null;
    // private playerCertificateKeys: string[];
    /*not mapped: */ playerCertificateKeys(): string[];
    // private profilePropertyKeys: string[];
    /*not mapped: */ profilePropertyKeys(): string[];
    component1(): string[];
    component2(): string[];
    component3(): string[] | null;
    copy(profilePropertyKeys: string[], playerCertificateKeys: string[], authenticationKeys: string[] | null): PublicKeys;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}