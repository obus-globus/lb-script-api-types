import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { Principal } from '../../../java/security/Principal.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { Certificate } from '../../../javax/security/cert/Certificate.d.ts'
export abstract class X509Certificate extends Certificate {
    static getInstance(paramarg0: number[]): X509Certificate;
    static getInstance(paramarg0: InputStream): X509Certificate;
    constructor()
    checkValidity(): void;
    checkValidity(arg0: Date): void;
    getIssuerDN(): Principal;
    getNotAfter(): Date;
    getNotBefore(): Date;
    getSerialNumber(): BigInteger;
    getSigAlgName(): string;
    getSigAlgOID(): string;
    getSigAlgParams(): number[];
    getSubjectDN(): Principal;
    getVersion(): number;
}