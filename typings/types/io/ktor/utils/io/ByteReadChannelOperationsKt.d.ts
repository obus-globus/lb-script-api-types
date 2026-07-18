import type { ByteChannel } from '../../../../io/ktor/utils/io/ByteChannel.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { LineEnding } from '../../../../io/ktor/utils/io/LineEnding.d.ts'
import type { LineEndingMode } from '../../../../io/ktor/utils/io/LineEndingMode.d.ts'
import type { ReaderJob } from '../../../../io/ktor/utils/io/ReaderJob.d.ts'
import type { ReaderScope } from '../../../../io/ktor/utils/io/ReaderScope.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Buffer } from '../../../../kotlinx/io/Buffer.d.ts'
import type { RawSink } from '../../../../kotlinx/io/RawSink.d.ts'
import type { Source } from '../../../../kotlinx/io/Source.d.ts'
import type { ByteString } from '../../../../kotlinx/io/bytestring/ByteString.d.ts'
export class ByteReadChannelOperationsKt extends Object {
    static copyAndClose(self: ByteReadChannel, channel: ByteWriteChannel): number;
    static copyTo(self: ByteReadChannel, channel: ByteWriteChannel): number;
    static copyTo(self: ByteReadChannel, channel: ByteWriteChannel, limit: number): number;
    static discard(self: ByteReadChannel, max: number): number;
    static discardExact(self: ByteReadChannel, value: number): void;
    static exhausted(self: ByteReadChannel): boolean;
    static getAvailableForRead(paramarg0: ByteReadChannel): number;
    static getAvailableForWrite(paramarg0: ByteWriteChannel): number;
    static peek(self: ByteReadChannel, count: number): ByteString | null;
    static read(self: ByteReadChannel, block: (param0: number[], param1: number, param2: number) => number): number;
    static readAvailable(self: ByteReadChannel, min: number, block: (param0: Buffer) => number): number;
    static readAvailable(self: ByteReadChannel, buffer: number[], offset: number, length: number): number;
    static readBuffer(self: ByteReadChannel, max: number): Buffer;
    static readBuffer(self: ByteReadChannel): Buffer;
    static readByte(self: ByteReadChannel): number;
    static readByteArray(self: ByteReadChannel, count: number): number[];
    static readDouble(self: ByteReadChannel): number;
    static readFloat(self: ByteReadChannel): number;
    static readFully(self: ByteReadChannel, out: number[], start: number, end: number): void;
    static readInt(self: ByteReadChannel): number;
    static readLine(self: ByteReadChannel, lineEnding: LineEnding): string | null;
    static readLineStrict(self: ByteReadChannel, limit: number, lineEnding: LineEnding): string | null;
    static readLineStrictTo(self: ByteReadChannel, out: Appendable, limit: number, lineEnding: LineEnding): number;
    static readLineTo(self: ByteReadChannel, out: Appendable, lineEnding: LineEnding): number;
    static readLong(self: ByteReadChannel): number;
    static readPacket(self: ByteReadChannel, packet: number): Source;
    static readRemaining(self: ByteReadChannel): Source;
    static readRemaining(self: ByteReadChannel, max: number): Source;
    static readShort(self: ByteReadChannel): number;
    static readTo(self: ByteReadChannel, sink: RawSink, limit: number): number;
    static readUTF8Line(self: ByteReadChannel, max: number): string | null;
    static readUTF8LineTo(self: ByteReadChannel, out: Appendable, max: number): boolean;
// (invalid TS: name contains '-')     static readUTF8LineTo-RRvyBJ8(self: ByteReadChannel, out: Appendable, max: number, lineEnding: LineEndingMode): boolean;
    static readUntil(self: ByteReadChannel, matchString: ByteString, writeChannel: ByteWriteChannel, limit: number, ignoreMissing: boolean): number;
    static reader(self: CoroutineScope, coroutineContext: CoroutineContext, autoFlush: boolean, block: (param0: ReaderScope) => void): ReaderJob;
    static reader(self: CoroutineScope, coroutineContext: CoroutineContext, channel: ByteChannel, block: (param0: ReaderScope) => void): ReaderJob;
    static rethrowCloseCauseIfNeeded(self: ByteChannel): void;
    static rethrowCloseCauseIfNeeded(self: ByteReadChannel): void;
    static rethrowCloseCauseIfNeeded(self: ByteWriteChannel): void;
    static skipIfFound(self: ByteReadChannel, byteString: ByteString): boolean;
    static toByteArray(self: ByteReadChannel): number[];
}