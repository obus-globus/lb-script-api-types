import type { File } from '../../../java/io/File.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Relay } from '../../../okhttp3/internal/cache2/Relay.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
export class Relay$Companion extends Object {
    // private FILE_HEADER_SIZE: number;
    PREFIX_CLEAN: ByteString;
    PREFIX_DIRTY: ByteString;
    // private SOURCE_FILE: number;
    // private SOURCE_UPSTREAM: number;
    edit(file: File, upstream: Source, metadata: ByteString, bufferMaxSize: number): Relay;
    read(file: File): Relay;
}