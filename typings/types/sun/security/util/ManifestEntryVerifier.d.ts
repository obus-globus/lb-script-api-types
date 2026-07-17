import type { JavaMap } from '../../../JavaMap.d.ts'
import type { CodeSigner } from '../../../java/security/CodeSigner.d.ts'
import type { MessageDigest } from '../../../java/security/MessageDigest.d.ts'
import type { JarEntry } from '../../../java/util/jar/JarEntry.d.ts'
import type { Manifest } from '../../../java/util/jar/Manifest.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { JarConstraintsParameters } from '../../../sun/security/util/JarConstraintsParameters.d.ts'
export class ManifestEntryVerifier extends Object {
    constructor(arg0: Manifest, arg1: string)
    // private createdDigests: JavaMap<string, MessageDigest>;
    // private digests: MessageDigest[];
    readonly entry: JarEntry;
    // private man: Manifest;
    // private manifestFileName: string;
    // private manifestHashes: number[][];
    // private name: string;
    // private signers: CodeSigner[];
    // private skip: boolean;
    // private checkConstraints(arg0: string, arg1: JarConstraintsParameters): boolean;
    getEntry(): JarEntry;
    setEntry(arg0: string, arg1: JarEntry): void;
    update(arg0: number): void;
    update(arg0: number[], arg1: number, arg2: number): void;
    verify(arg0: JavaMap<string, CodeSigner[]>, arg1: JavaMap<string, CodeSigner[]>, arg2: JavaMap<CodeSigner[], JavaMap<string, boolean>>): CodeSigner[];
}