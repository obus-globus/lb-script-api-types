import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { Timestamp } from '../../../java/security/Timestamp.d.ts'
import type { X509Certificate } from '../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PKCS7 } from '../../../sun/security/pkcs/PKCS7.d.ts'
import type { PKCS9Attributes } from '../../../sun/security/pkcs/PKCS9Attributes.d.ts'
import type { SignerInfo$AlgorithmInfo } from '../../../sun/security/pkcs/SignerInfo$AlgorithmInfo.d.ts'
import type { TimestampToken } from '../../../sun/security/timestamp/TimestampToken.d.ts'
import type { DerEncoder } from '../../../sun/security/util/DerEncoder.d.ts'
import type { DerInputStream } from '../../../sun/security/util/DerInputStream.d.ts'
import type { DerOutputStream } from '../../../sun/security/util/DerOutputStream.d.ts'
import type { JarConstraintsParameters } from '../../../sun/security/util/JarConstraintsParameters.d.ts'
import type { AlgorithmId } from '../../../sun/security/x509/AlgorithmId.d.ts'
import type { X500Name } from '../../../sun/security/x509/X500Name.d.ts'
export class SignerInfo extends Object implements DerEncoder {
    static makeSigAlg(paramarg0: AlgorithmId, paramarg1: AlgorithmId): string;
    static verifyAlgorithms(paramarg0: SignerInfo[], paramarg1: JarConstraintsParameters, paramarg2: string): string[];
    constructor(arg0: DerInputStream)
    constructor(arg0: DerInputStream, arg1: boolean)
    constructor(arg0: X500Name, arg1: BigInteger, arg2: AlgorithmId, arg3: PKCS9Attributes, arg4: AlgorithmId, arg5: number[], arg6: PKCS9Attributes)
    constructor(arg0: X500Name, arg1: BigInteger, arg2: AlgorithmId, arg3: AlgorithmId, arg4: number[])
    // private algorithms: Map<AlgorithmId, SignerInfo$AlgorithmInfo>;
    authenticatedAttributes: PKCS9Attributes;
    certificateSerialNumber: BigInteger;
    digestAlgorithmId: AlgorithmId;
    digestEncryptionAlgorithmId: AlgorithmId;
    encryptedDigest: number[];
    // private hasTimestamp: boolean;
    issuerName: X500Name;
    timestamp: Timestamp;
    unauthenticatedAttributes: PKCS9Attributes;
    version: BigInteger;
    // private checkCMSAlgorithmProtection(): void;
    encode(arg0: DerOutputStream): void;
    getAuthenticatedAttributes(): PKCS9Attributes;
    getCertificate(arg0: PKCS7): X509Certificate;
    getCertificateChain(arg0: PKCS7): X509Certificate[];
    getCertificateSerialNumber(): BigInteger;
    getDigestAlgorithmId(): AlgorithmId;
    getDigestEncryptionAlgorithmId(): AlgorithmId;
    getEncryptedDigest(): number[];
    getIssuerName(): X500Name;
    getTimestamp(): Timestamp;
    getTsToken(): PKCS7;
    getUnauthenticatedAttributes(): PKCS9Attributes;
    getVersion(): BigInteger;
    toString(): string;
    verify(arg0: PKCS7): SignerInfo;
    verify(arg0: PKCS7, arg1: number[]): SignerInfo;
    // private verifyTimestamp(arg0: TimestampToken): void;
}