import type { File } from '../java/io/File.d.ts'
import type { FileDescriptor } from '../java/io/FileDescriptor.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { MediaType } from '../okhttp3/MediaType.d.ts'
import type { RequestBody$Companion } from '../okhttp3/RequestBody$Companion.d.ts'
import type { BufferedSink } from '../okio/BufferedSink.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
import type { FileSystem } from '../okio/FileSystem.d.ts'
import type { Path } from '../okio/Path.d.ts'
export abstract class RequestBody extends Object {
    static Companion: RequestBody$Companion;
    static EMPTY: RequestBody;
    static create(paramarg0: number[]): RequestBody;
    static create(paramarg0: number[], paramarg1: MediaType): RequestBody;
    static create(paramarg0: number[], paramarg1: MediaType, paramarg2: number): RequestBody;
    static create(paramarg0: number[], paramarg1: MediaType, paramarg2: number, paramarg3: number): RequestBody;
    static create(paramarg0: File, paramarg1: MediaType): RequestBody;
    static create(paramarg0: FileDescriptor, paramarg1: MediaType): RequestBody;
    static create(paramarg0: string, paramarg1: MediaType): RequestBody;
    static create(paramarg0: MediaType, paramarg1: number[]): RequestBody;
    static create(paramarg0: MediaType, paramarg1: number[], paramarg2: number): RequestBody;
    static create(paramarg0: MediaType, paramarg1: number[], paramarg2: number, paramarg3: number): RequestBody;
    static create(paramarg0: MediaType, paramarg1: File): RequestBody;
    static create(paramarg0: MediaType, paramarg1: string): RequestBody;
    static create(paramarg0: MediaType, paramarg1: ByteString): RequestBody;
    static create(paramarg0: ByteString, paramarg1: MediaType): RequestBody;
    static create(paramarg0: Path, paramarg1: FileSystem, paramarg2: MediaType): RequestBody;
    constructor()
    contentLength(): number;
    contentType(): MediaType | null;
    isDuplex(): boolean;
    isOneShot(): boolean;
    sha256(): ByteString;
    writeTo(sink: BufferedSink): void;
}