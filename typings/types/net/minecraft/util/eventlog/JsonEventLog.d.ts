import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { FileChannel } from '../../../../java/nio/channels/FileChannel.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { JsonEventLogReader } from '../../../../net/minecraft/util/eventlog/JsonEventLogReader.d.ts'
export class JsonEventLog<T extends unknown> extends Object implements Closeable {
    static open<T extends unknown>(paramcodec: Codec<T>, parampath: Path): JsonEventLog<T>;
    constructor(codec: Codec<T>, channel: FileChannel)
    // private channel: FileChannel;
    // private codec: Codec<T>;
    // private referenceCount: AtomicInteger;
    close(): void;
    openReader(): JsonEventLogReader<T>;
    // private releaseReference(): void;
    write(event: T): void;
}