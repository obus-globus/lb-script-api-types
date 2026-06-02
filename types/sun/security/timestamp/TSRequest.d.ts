import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { MessageDigest } from '../../../java/security/MessageDigest.d.ts'
import type { X509Extension } from '../../../java/security/cert/X509Extension.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AlgorithmId } from '../../../sun/security/x509/AlgorithmId.d.ts'
export class TSRequest extends Object {
    constructor(arg0: string, arg1: number[], arg2: MessageDigest)
    readonly extensions: X509Extension[];
    // private hashAlgorithmId: AlgorithmId;
    // private hashValue: number[];
    readonly nonce: BigInteger;
    readonly policyId: string;
    // private returnCertificate: boolean;
    readonly version: number;
    encode(): number[];
    getHashedMessage(): number[];
    requestCertificate(arg0: boolean): void;
    setExtensions(arg0: X509Extension[]): void;
    setNonce(arg0: BigInteger): void;
    setPolicyId(arg0: string): void;
    setVersion(arg0: number): void;
}