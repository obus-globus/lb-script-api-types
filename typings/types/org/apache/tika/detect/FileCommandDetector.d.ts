import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Detector } from '../../../../org/apache/tika/detect/Detector.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { Property } from '../../../../org/apache/tika/metadata/Property.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
export class FileCommandDetector extends Object implements Detector {
    static FILE_MIME: Property;
    static checkHasFile(): boolean;
    static checkHasFile(paramarg0: string): boolean;
    constructor()
    // private fileCommandPath: string;
    // private hasFileCommand: boolean;
    readonly maxBytes: number;
    readonly timeoutMs: number;
    readonly useMime: boolean;
    detect(arg0: InputStream, arg1: Metadata): MediaType;
    // private detectOnPath(arg0: Path, arg1: Metadata): MediaType;
    isUseMime(): boolean;
    setFilePath(arg0: string): void;
    setMaxBytes(arg0: number): void;
    setTimeoutMs(arg0: number): void;
    setUseMime(arg0: boolean): void;
}