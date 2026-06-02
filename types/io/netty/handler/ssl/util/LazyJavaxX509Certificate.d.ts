import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { Principal } from '../../../../../java/security/Principal.d.ts'
import type { PublicKey } from '../../../../../java/security/PublicKey.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { X509Certificate } from '../../../../../javax/security/cert/X509Certificate.d.ts'
export class LazyJavaxX509Certificate extends X509Certificate {
    static getInstance(paramarg0: number[]): X509Certificate;
    static getInstance(paramarg0: InputStream): X509Certificate;
    constructor(arg0: number[])
    // private bytes: number[];
    // private wrapped: X509Certificate;
    checkValidity(): void;
    checkValidity(arg0: Date): void;
    getBytes(): number[];
    getEncoded(): number[];
    getIssuerDN(): Principal;
    getNotAfter(): Date;
    getNotBefore(): Date;
    getPublicKey(): PublicKey;
    getSerialNumber(): BigInteger;
    getSigAlgName(): string;
    getSigAlgOID(): string;
    getSigAlgParams(): number[];
    getSubjectDN(): Principal;
    getVersion(): number;
    toString(): string;
    // private unwrap(): X509Certificate;
    verify(arg0: PublicKey): void;
    verify(arg0: PublicKey, arg1: string): void;
}