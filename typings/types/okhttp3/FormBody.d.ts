import type { File } from '../java/io/File.d.ts'
import type { FileDescriptor } from '../java/io/FileDescriptor.d.ts'
import type { FormBody$Companion } from '../okhttp3/FormBody$Companion.d.ts'
import type { MediaType } from '../okhttp3/MediaType.d.ts'
import type { RequestBody } from '../okhttp3/RequestBody.d.ts'
import type { RequestBody$Companion } from '../okhttp3/RequestBody$Companion.d.ts'
import type { BufferedSink } from '../okio/BufferedSink.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
import type { FileSystem } from '../okio/FileSystem.d.ts'
import type { Path } from '../okio/Path.d.ts'
export class FormBody extends RequestBody {
    static Companion: FormBody$Companion;
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
    constructor(encodedNames: string[], encodedValues: string[])
    // private encodedNames: string[];
    // private encodedValues: string[];
    size(): number;
    contentLength(): number;
    contentType(): MediaType;
    encodedName(index: number): string;
    encodedValue(index: number): string;
    name(index: number): string;
    size(): number;
    value(index: number): string;
    // private writeOrCountBytes(sink: BufferedSink | null, countBytes: boolean): number;
    writeTo(sink: BufferedSink): void;
}