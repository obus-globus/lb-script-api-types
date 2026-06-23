import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
export class TemporaryResources extends Object implements Closeable {
    constructor()
    // private resources: Closeable[];
    // private tempFileDir: Path[];
    addResource(arg0: Closeable): void;
    close(): void;
    createTempFile(): Path[];
    createTempFile(arg0: string): Path[];
    createTempFile(arg0: Metadata): Path[];
    createTemporaryFile(): File;
    dispose(): void;
    getResource<T extends Closeable>(arg0: Class<T>): T;
    setTemporaryFileDirectory(arg0: File): void;
    setTemporaryFileDirectory(arg0: Path[]): void;
}