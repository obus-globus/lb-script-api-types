import type { CodeSigner } from '../../../java/security/CodeSigner.d.ts'
import type { MessageDigest } from '../../../java/security/MessageDigest.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { CertificateFactory } from '../../../java/security/cert/CertificateFactory.d.ts'
import type { Manifest } from '../../../java/util/jar/Manifest.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PKCS7 } from '../../../sun/security/pkcs/PKCS7.d.ts'
import type { SignerInfo } from '../../../sun/security/pkcs/SignerInfo.d.ts'
import type { JarConstraintsParameters } from '../../../sun/security/util/JarConstraintsParameters.d.ts'
import type { ManifestDigester } from '../../../sun/security/util/ManifestDigester.d.ts'
export class SignatureFileVerifier extends Object {
    static MAX_SIG_FILE_SIZE: number;
    static getBlockExtension(paramarg0: PrivateKey): string;
    static isBlockOrSF(paramarg0: string): boolean;
    static isInMetaInf(paramarg0: string): boolean;
    static isSigningRelated(paramarg0: string): boolean;
    constructor(arg0: CodeSigner[][], arg1: ManifestDigester, arg2: string, arg3: number[])
    // private block: PKCS7;
    // private certificateFactory: CertificateFactory;
    // private createdDigests: { [key: string]: MessageDigest };
    // private md: ManifestDigester;
    // private name: string;
    // private params: JarConstraintsParameters;
    // private permittedAlgs: { [key: string]: boolean };
    // private sfBytes: number[];
    // private signerCache: CodeSigner[][];
    // private workaround: boolean;
    // private getDigest(arg0: string): MessageDigest;
    // private getSigners(arg0: SignerInfo[], arg1: PKCS7): CodeSigner[];
    getWeakAlgorithms(arg0: string): string;
    needSignatureFile(arg0: string): boolean;
    needSignatureFileBytes(): boolean;
    // private permittedCheck(arg0: string, arg1: string): boolean;
    process(arg0: { [key: string]: CodeSigner[] }, arg1: Object[], arg2: string): void;
    // private processImpl(arg0: { [key: string]: CodeSigner[] }, arg1: Object[], arg2: string): void;
    setSignatureFile(arg0: number[]): void;
    updateSigners(arg0: CodeSigner[], arg1: { [key: string]: CodeSigner[] }, arg2: string): void;
    // private verifyManifestHash(arg0: Manifest, arg1: ManifestDigester, arg2: Object[]): boolean;
    // private verifyManifestMainAttrs(arg0: Manifest, arg1: ManifestDigester): boolean;
    // private verifySection(arg0: { [key: string]: any }, arg1: string, arg2: ManifestDigester): boolean;
}