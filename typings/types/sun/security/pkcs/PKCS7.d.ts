import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Principal } from '../../../java/security/Principal.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { X509CRL } from '../../../java/security/cert/X509CRL.d.ts'
import type { X509Certificate } from '../../../java/security/cert/X509Certificate.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ContentInfo } from '../../../sun/security/pkcs/ContentInfo.d.ts'
import type { PKCS9Attributes } from '../../../sun/security/pkcs/PKCS9Attributes.d.ts'
import type { SignerInfo } from '../../../sun/security/pkcs/SignerInfo.d.ts'
import type { Timestamper } from '../../../sun/security/timestamp/Timestamper.d.ts'
import type { DerInputStream } from '../../../sun/security/util/DerInputStream.d.ts'
import type { DerOutputStream } from '../../../sun/security/util/DerOutputStream.d.ts'
import type { DerValue } from '../../../sun/security/util/DerValue.d.ts'
import type { AlgorithmId } from '../../../sun/security/x509/AlgorithmId.d.ts'
import type { X500Name } from '../../../sun/security/x509/X500Name.d.ts'
export class PKCS7 extends Object {
    static generateSignedData(paramarg0: string, paramarg1: { [key: string]: any }, paramarg2: PrivateKey, paramarg3: (Object | null)[], paramarg4: number[], paramarg5: boolean, paramarg6: boolean, paramarg7: (param0: number[]) => PKCS9Attributes): number[];
    static generateTimestampToken(paramarg0: Timestamper, paramarg1: string, paramarg2: string, paramarg3: number[]): number[];
    static getTimestampingURI(paramarg0: X509Certificate): URI;
    constructor(arg0: InputStream)
    constructor(arg0: AlgorithmId[], arg1: ContentInfo, arg2: X509Certificate[], arg3: X509CRL[], arg4: SignerInfo[])
    constructor(arg0: AlgorithmId[], arg1: ContentInfo, arg2: X509Certificate[], arg3: SignerInfo[])
    constructor(arg0: number[])
    constructor(arg0: DerInputStream)
    // private certIssuerNames: Principal[];
    readonly certificates: X509Certificate[];
    readonly contentInfo: ContentInfo;
    // private crls: X509CRL[];
    readonly digestAlgorithmIds: AlgorithmId[];
    readonly oldStyle: boolean;
    readonly signerInfos: SignerInfo[];
    readonly version: BigInteger;
    encodeSignedData(arg0: DerOutputStream): void;
    getCRLs(): X509CRL[];
    getCertificate(arg0: BigInteger, arg1: X500Name): X509Certificate;
    getCertificates(): X509Certificate[];
    getContentInfo(): ContentInfo;
    getDigestAlgorithmIds(): AlgorithmId[];
    getSignerInfos(): SignerInfo[];
    getVersion(): BigInteger;
    isOldStyle(): boolean;
    // private parse(arg0: DerInputStream): void;
    // private parse(arg0: DerInputStream, arg1: boolean): void;
    // private parseNetscapeCertChain(arg0: DerValue): void;
    // private parseOldSignedData(arg0: DerValue): void;
    // private parseSignedData(arg0: DerValue): void;
    // private populateCertIssuerNames(): void;
    toString(): string;
    verify(arg0: number[]): SignerInfo[];
    verify(arg0: SignerInfo, arg1: number[]): SignerInfo;
}