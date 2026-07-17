import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { Principal } from '../../../../../java/security/Principal.d.ts'
import type { PublicKey } from '../../../../../java/security/PublicKey.d.ts'
import type { X509Certificate } from '../../../../../java/security/cert/X509Certificate.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { X500Principal } from '../../../../../javax/security/auth/x500/X500Principal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LazyX509Certificate extends X509Certificate {
    constructor(arg0: number[])
    // private bytes: number[];
    // private wrapped: X509Certificate;
    checkValidity(): void;
    checkValidity(arg0: Date): void;
    getBasicConstraints(): number;
    getCriticalExtensionOIDs(): string[];
    getEncoded(): number[];
    getExtendedKeyUsage(): string[];
    getExtensionValue(arg0: string): number[];
    getIssuerAlternativeNames(): (Object | null)[][];
    getIssuerDN(): Principal;
    getIssuerUniqueID(): boolean[];
    getIssuerX500Principal(): X500Principal;
    getKeyUsage(): boolean[];
    getNonCriticalExtensionOIDs(): string[];
    getNotAfter(): Date;
    getNotBefore(): Date;
    getPublicKey(): PublicKey;
    getSerialNumber(): BigInteger;
    getSigAlgName(): string;
    getSigAlgOID(): string;
    getSigAlgParams(): number[];
    getSignature(): number[];
    getSubjectAlternativeNames(): (Object | null)[][];
    getSubjectDN(): Principal;
    getSubjectUniqueID(): boolean[];
    getSubjectX500Principal(): X500Principal;
    getTBSCertificate(): number[];
    getVersion(): number;
    hasUnsupportedCriticalExtension(): boolean;
    toString(): string;
    // private unwrap(): X509Certificate;
    verify(arg0: PublicKey): void;
    verify(arg0: PublicKey, arg1: JavaMap<any, any>): void;
    verify(arg0: PublicKey, arg1: string): void;
}