import type { ByteArrayOutputStream } from '../../../java/io/ByteArrayOutputStream.d.ts'
import type { CodeSigner } from '../../../java/security/CodeSigner.d.ts'
import type { Certificate } from '../../../java/security/cert/Certificate.d.ts'
import type { JarEntry } from '../../../java/util/jar/JarEntry.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ManifestDigester } from '../../../sun/security/util/ManifestDigester.d.ts'
import type { ManifestEntryVerifier } from '../../../sun/security/util/ManifestEntryVerifier.d.ts'
import type { SignatureFileVerifier } from '../../../sun/security/util/SignatureFileVerifier.d.ts'
export class JarVerifier extends Object {
    static MULTIPLE_MANIFEST_WARNING: string;
    constructor(arg0: string, arg1: number[])
    // private anyToVerify: boolean;
    // private baos: ByteArrayOutputStream;
    // private manDig: ManifestDigester;
    // private manifestDigests: Object[];
    // private manifestName: string;
    // private manifestRawBytes: number[];
    // private parsingBlockOrSF: boolean;
    // private parsingMeta: boolean;
    // private pendingBlocks: SignatureFileVerifier[];
    // private sigFileData: { [key: string]: number[] };
    // private sigFileSigners: { [key: string]: CodeSigner[] };
    // private signerCache: CodeSigner[][];
    // private signersToAlgs: Map<CodeSigner[], { [key: string]: boolean }>;
    // private verifiedSigners: { [key: string]: CodeSigner[] };
    beginEntry(arg0: JarEntry, arg1: ManifestEntryVerifier): void;
    doneWithMeta(): void;
    getCerts(arg0: JarEntry): Certificate[];
    getCodeSigners(arg0: JarEntry): CodeSigner[];
    isTrustedManifestEntry(arg0: string): boolean;
    nothingToVerify(): boolean;
    // private processEntry(arg0: ManifestEntryVerifier): void;
    update(arg0: number, arg1: number[], arg2: number, arg3: number, arg4: ManifestEntryVerifier): void;
    update(arg0: number, arg1: ManifestEntryVerifier): void;
}