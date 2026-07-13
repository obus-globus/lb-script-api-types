import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KeyPairInfo } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/KeyPairInfo.d.ts'
export class PlayerCertificates extends Record {
    constructor(keyPair: KeyPairInfo, publicKeySignature: string, publicKeySignatureV2: string, expiresAt: string, refreshedAfter: string)
    // private expiresAt: string;
    /*not mapped: */ expiresAt(): string;
    // private keyPair: KeyPairInfo;
    /*not mapped: */ keyPair(): KeyPairInfo;
    // private publicKeySignature: string;
    /*not mapped: */ publicKeySignature(): string;
    // private publicKeySignatureV2: string;
    /*not mapped: */ publicKeySignatureV2(): string;
    // private refreshedAfter: string;
    /*not mapped: */ refreshedAfter(): string;
    component1(): KeyPairInfo;
    component2(): string;
    component3(): string;
    component4(): string;
    component5(): string;
    copy(keyPair: KeyPairInfo, publicKeySignature: string, publicKeySignatureV2: string, expiresAt: string, refreshedAfter: string): PlayerCertificates;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}