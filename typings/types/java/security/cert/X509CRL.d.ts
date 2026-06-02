import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { DEREncodable } from '../../../java/security/DEREncodable.d.ts'
import type { Principal } from '../../../java/security/Principal.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { CRL } from '../../../java/security/cert/CRL.d.ts'
import type { X509CRLEntry } from '../../../java/security/cert/X509CRLEntry.d.ts'
import type { X509Certificate } from '../../../java/security/cert/X509Certificate.d.ts'
import type { X509Extension } from '../../../java/security/cert/X509Extension.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { X500Principal } from '../../../javax/security/auth/x500/X500Principal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class X509CRL extends CRL implements DEREncodable, X509Extension {
    constructor()
    // private issuerPrincipal: X500Principal;
    equals(arg0: Object | null): boolean;
    getEncoded(): number[];
    getIssuerDN(): Principal;
    getIssuerX500Principal(): X500Principal;
    getNextUpdate(): Date;
    getRevokedCertificate(arg0: BigInteger): X509CRLEntry;
    getRevokedCertificate(arg0: X509Certificate): X509CRLEntry;
    getRevokedCertificates(): X509CRLEntry[];
    getSigAlgName(): string;
    getSigAlgOID(): string;
    getSigAlgParams(): number[];
    getSignature(): number[];
    getTBSCertList(): number[];
    getThisUpdate(): Date;
    getVersion(): number;
    hashCode(): number;
    verify(arg0: PublicKey): void;
    verify(arg0: PublicKey, arg1: Provider): void;
    verify(arg0: PublicKey, arg1: string): void;
}