import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { MessageDigest } from '../../../../../java/security/MessageDigest.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GitIdentifiers$TreeIdBuilder } from '../../../../../org/apache/commons/codec/digest/GitIdentifiers$TreeIdBuilder.d.ts'
export class GitIdentifiers extends Object {
    static blobId(paramarg0: MessageDigest, paramarg1: number[]): number[];
    static blobId(paramarg0: MessageDigest, paramarg1: Path): number[];
    static blobId(paramarg0: MessageDigest, paramarg1: number, paramarg2: InputStream): number[];
    static treeId(paramarg0: MessageDigest, paramarg1: Path): number[];
    static treeIdBuilder(paramarg0: MessageDigest): GitIdentifiers$TreeIdBuilder;
    private constructor()
}