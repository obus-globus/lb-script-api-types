import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ModuleReader extends Closeable, Object{
    close(): void;
    find(arg0: string): Optional<URI>;
    list(): Stream<string>;
    open(arg0: string): Optional<InputStream>;
    read(arg0: string): Optional<ByteBuffer>;
    release(arg0: ByteBuffer): void;
}