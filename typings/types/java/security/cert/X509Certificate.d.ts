import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { DEREncodable } from '../../../java/security/DEREncodable.d.ts'
import type { Principal } from '../../../java/security/Principal.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { Certificate } from '../../../java/security/cert/Certificate.d.ts'
import type { X509Extension } from '../../../java/security/cert/X509Extension.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { X500Principal } from '../../../javax/security/auth/x500/X500Principal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class X509Certificate extends Certificate implements DEREncodable, X509Extension {
    constructor()
    readonly issuerX500Principal: X500Principal;
    readonly subjectX500Principal: X500Principal;
    checkValidity(): void;
    checkValidity(arg0: Date): void;
    getBasicConstraints(): number;
    getExtendedKeyUsage(): string[];
    getIssuerAlternativeNames(): (Object | null)[][];
    getIssuerDN(): Principal;
    getIssuerUniqueID(): boolean[];
    getIssuerX500Principal(): X500Principal;
    getKeyUsage(): boolean[];
    getNotAfter(): Date;
    getNotBefore(): Date;
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
    verify(arg0: PublicKey, arg1: { [key: string]: any }): void;
}