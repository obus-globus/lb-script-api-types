import type { File } from '../../../java/io/File.d.ts'
import type { FileDescriptor } from '../../../java/io/FileDescriptor.d.ts'
import type { MediaType } from '../../../okhttp3/MediaType.d.ts'
import type { RequestBody } from '../../../okhttp3/RequestBody.d.ts'
import type { RequestBody$Companion } from '../../../okhttp3/RequestBody$Companion.d.ts'
import type { BufferedSink } from '../../../okio/BufferedSink.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
import type { FileSystem } from '../../../okio/FileSystem.d.ts'
import type { Path } from '../../../okio/Path.d.ts'
export class GzipRequestBody extends RequestBody {
    static Companion: RequestBody$Companion;
    static EMPTY: RequestBody;
    static create(paramarg0: number[]): RequestBody;
    static create(paramarg0: number[], paramarg1: MediaType): RequestBody;
    static create(paramarg0: number[], paramarg1: MediaType, paramarg2: number): RequestBody;
    static create(self: number[], contentType: MediaType | null, offset: number, byteCount: number): RequestBody;
    static create(self: File, contentType: MediaType | null): RequestBody;
    static create(self: FileDescriptor, contentType: MediaType | null): RequestBody;
    static create(self: string, contentType: MediaType | null): RequestBody;
    static create(paramarg0: MediaType, paramarg1: number[]): RequestBody;
    static create(paramarg0: MediaType, paramarg1: number[], paramarg2: number): RequestBody;
    static create(contentType: MediaType | null, content: number[], offset: number, byteCount: number): RequestBody;
    static create(contentType: MediaType | null, file: File): RequestBody;
    static create(contentType: MediaType | null, content: string): RequestBody;
    static create(contentType: MediaType | null, content: ByteString): RequestBody;
    static create(self: ByteString, contentType: MediaType | null): RequestBody;
    static create(self: Path, fileSystem: FileSystem, contentType: MediaType | null): RequestBody;
    constructor(delegate: RequestBody)
    readonly delegate: RequestBody;
    contentLength(): number;
    contentType(): MediaType | null;
    isOneShot(): boolean;
    writeTo(sink: BufferedSink): void;
}