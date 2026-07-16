import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { FileChannel } from '../../../../java/nio/channels/FileChannel.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Blob } from '../../../../java/sql/Blob.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TaggedInputStream } from '../../../../org/apache/commons/io/input/TaggedInputStream.d.ts'
import type { InputStreamFactory } from '../../../../org/apache/tika/io/InputStreamFactory.d.ts'
import type { TemporaryResources } from '../../../../org/apache/tika/io/TemporaryResources.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
export class TikaInputStream extends TaggedInputStream {
    static cast(paramarg0: InputStream): TikaInputStream;
    static get(paramarg0: number[]): TikaInputStream;
    static get(paramarg0: number[], paramarg1: Metadata): TikaInputStream;
    static get(paramarg0: File): TikaInputStream;
    static get(paramarg0: File, paramarg1: Metadata): TikaInputStream;
    static get(paramarg0: InputStream): TikaInputStream;
    static get(paramarg0: InputStream, paramarg1: TemporaryResources, paramarg2: Metadata): TikaInputStream;
    static get(paramarg0: URI): TikaInputStream;
    static get(paramarg0: URI, paramarg1: Metadata): TikaInputStream;
    static get(paramarg0: URL): TikaInputStream;
    static get(paramarg0: URL, paramarg1: Metadata): TikaInputStream;
    static get(paramarg0: Path): TikaInputStream;
    static get(paramarg0: Path, paramarg1: Metadata): TikaInputStream;
    static get(paramarg0: Path, paramarg1: Metadata, paramarg2: TemporaryResources): TikaInputStream;
    static get(paramarg0: Blob): TikaInputStream;
    static get(paramarg0: Blob, paramarg1: Metadata): TikaInputStream;
    static get(paramarg0: InputStreamFactory): TikaInputStream;
    static get(paramarg0: InputStreamFactory, paramarg1: TemporaryResources): TikaInputStream;
    static isTikaInputStream(paramarg0: InputStream): boolean;
    static nullInputStream(): InputStream;
    private constructor(arg0: File)
    private constructor(arg0: InputStream, arg1: TemporaryResources, arg2: number, arg3: string)
    private constructor(arg0: Path)
    private constructor(arg0: Path, arg1: TemporaryResources, arg2: number)
    // private consecutiveEOFs: number;
    readonly length: number;
    // private mark: number;
    readonly openContainer: Object;
    readonly path: Path;
    readonly position: number;
    // private skipBuffer: number[];
    // private streamFactory: InputStreamFactory;
    // private suffix: string;
    // private tmp: TemporaryResources;
    addCloseableResource(arg0: Closeable): void;
    afterRead(arg0: number): void;
    close(): void;
    getFile(): File;
    getFileChannel(): FileChannel;
    getInputStreamFactory(): InputStreamFactory;
    getLength(): number;
    getOpenContainer(): Object;
    getPath(): Path;
    getPath(arg0: number): Path;
    getPosition(): number;
    hasFile(): boolean;
    hasInputStreamFactory(): boolean;
    hasLength(): boolean;
    mark(arg0: number): void;
    markSupported(): boolean;
    peek(arg0: number[]): number;
    reset(): void;
    setOpenContainer(arg0: Object): void;
    skip(arg0: number): number;
    toString(): string;
}