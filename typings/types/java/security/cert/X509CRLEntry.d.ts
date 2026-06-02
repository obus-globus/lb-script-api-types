import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { CRLReason } from '../../../java/security/cert/CRLReason.d.ts'
import type { X509Extension } from '../../../java/security/cert/X509Extension.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { X500Principal } from '../../../javax/security/auth/x500/X500Principal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class X509CRLEntry extends Object implements X509Extension {
    constructor()
    equals(arg0: Object | null): boolean;
    getCertificateIssuer(): X500Principal;
    getEncoded(): number[];
    getRevocationDate(): Date;
    getRevocationReason(): CRLReason;
    getSerialNumber(): BigInteger;
    hasExtensions(): boolean;
    hashCode(): number;
    toString(): string;
}