import type { ByteChannel } from '../../../../io/ktor/utils/io/ByteChannel.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { ChannelJob } from '../../../../io/ktor/utils/io/ChannelJob.d.ts'
import type { WriterJob } from '../../../../io/ktor/utils/io/WriterJob.d.ts'
import type { WriterScope } from '../../../../io/ktor/utils/io/WriterScope.d.ts'
import type { CancellationException } from '../../../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { DisposableHandle } from '../../../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { Buffer } from '../../../../kotlinx/io/Buffer.d.ts'
import type { RawSource } from '../../../../kotlinx/io/RawSource.d.ts'
import type { Source } from '../../../../kotlinx/io/Source.d.ts'
export class ByteWriteChannelOperationsKt extends Object {
    static awaitFreeSpace(self: ByteWriteChannel): void;
    static cancel(self: ChannelJob): void;
    static close(self: ByteWriteChannel, cause: Throwable | null): void;
    static fireAndForget<R extends unknown>(self: () => R): void;
    static getCancellationException(self: ChannelJob): CancellationException;
    static invokeOnCompletion(self: ChannelJob, block: (param0: Throwable | null) => void): DisposableHandle;
    static invokeOnCompletion(self: ChannelJob, block: () => void): void;
    static isCancelled(paramarg0: ChannelJob): boolean;
    static isCompleted(paramarg0: ChannelJob): boolean;
    static join(self: ChannelJob): void;
    static write(self: ByteWriteChannel, desiredSpace: number, block: (param0: number[], param1: number, param2: number) => number): number;
    static writeBuffer(self: ByteWriteChannel, source: RawSource): void;
    static writeBuffer(self: ByteWriteChannel, value: RawSource, length: number): void;
    static writeByte(self: ByteWriteChannel, value: number): void;
    static writeByteArray(self: ByteWriteChannel, array: number[]): void;
    static writeDouble(self: ByteWriteChannel, value: number): void;
    static writeFloat(self: ByteWriteChannel, value: number): void;
    static writeFully(self: ByteWriteChannel, value: number[], startIndex: number, endIndex: number): void;
    static writeInt(self: ByteWriteChannel, value: number): void;
    static writeLong(self: ByteWriteChannel, value: number): void;
    static writePacket(self: ByteWriteChannel, copy: Buffer): void;
    static writePacket(self: ByteWriteChannel, source: Source): void;
    static writeShort(self: ByteWriteChannel, value: number): void;
    static writeSource(self: ByteWriteChannel, source: Source): void;
    static writeString(self: ByteWriteChannel, value: string): void;
    static writeStringUtf8(self: ByteWriteChannel, value: string): void;
    static writer(self: CoroutineScope, coroutineContext: CoroutineContext, autoFlush: boolean, block: (param0: WriterScope) => void): WriterJob;
    static writer(self: CoroutineScope, coroutineContext: CoroutineContext, channel: ByteChannel, block: (param0: WriterScope) => void): WriterJob;
}