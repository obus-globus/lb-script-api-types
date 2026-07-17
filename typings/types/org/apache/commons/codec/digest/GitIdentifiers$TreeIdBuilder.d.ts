import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { MessageDigest } from '../../../../../java/security/MessageDigest.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GitIdentifiers$DirectoryEntry } from '../../../../../org/apache/commons/codec/digest/GitIdentifiers$DirectoryEntry.d.ts'
import type { GitIdentifiers$FileMode } from '../../../../../org/apache/commons/codec/digest/GitIdentifiers$FileMode.d.ts'
import type { GitIdentifiers$TreeIdBuilder$BlobIdSupplier } from '../../../../../org/apache/commons/codec/digest/GitIdentifiers$TreeIdBuilder$BlobIdSupplier.d.ts'
export class GitIdentifiers$TreeIdBuilder extends Object implements Supplier<number[]> {
    private constructor(arg0: MessageDigest)
    // private dirEntries: JavaMap<string, GitIdentifiers$TreeIdBuilder>;
    // private fileEntries: JavaMap<string, GitIdentifiers$DirectoryEntry>;
    // private messageDigest: MessageDigest;
    addDirectory(arg0: string): GitIdentifiers$TreeIdBuilder;
    addFile(arg0: GitIdentifiers$FileMode, arg1: string, arg2: number[]): void;
    addFile(arg0: GitIdentifiers$FileMode, arg1: string, arg2: number, arg3: InputStream): void;
    // private addFile(arg0: GitIdentifiers$FileMode, arg1: string, arg2: () => number[]): void;
    addSymbolicLink(arg0: string, arg1: string): void;
    get(): number[];
    // private populate(arg0: Path): GitIdentifiers$TreeIdBuilder;
}