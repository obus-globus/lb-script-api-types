import type { File } from '../../../../../java/io/File.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TarArchiveOutputStream } from '../../../../../org/apache/commons/compress/archivers/tar/TarArchiveOutputStream.d.ts'
export class RealmsUploadWorldPacker extends Object {
    static pack(paramdirectoryToPack: Path[][], paramisCanceled: () => boolean): File;
    private constructor(directoryToPack: Path[], isCanceled: () => boolean)
    // private directoryToPack: Path[];
    // private isCanceled: () => boolean;
    // private addFileToTarGz(out: TarArchiveOutputStream, path: Path[], base: string, root: boolean): void;
    // private tarGzipArchive(): File;
    // private verifyBelowSizeLimit(sizeInByte: number): void;
}