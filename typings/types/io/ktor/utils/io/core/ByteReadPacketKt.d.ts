import type { ObjectPool } from '../../../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../../../kotlinx/io/Buffer.d.ts'
import type { Sink } from '../../../../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../../../../kotlinx/io/Source.d.ts'
export class ByteReadPacketKt extends Object {
    static ByteReadPacket(array: number[], offset: number, length: number): Source;
    static Sink(): Buffer;
    static Sink(pool: ObjectPool<Object>): Buffer;
    static copy(self: Source): Source;
    static discard(self: Source, count: number): number;
    static getByteReadPacketEmpty(): Source;
    static getRemaining(paramarg0: Source): number;
    static preview<T extends unknown>(self: Sink, function_: (param0: Source) => T): T;
    static preview<T extends unknown>(self: Source, function_: (param0: Source) => T): T;
    static readAvailable(self: Source, out: Buffer): number;
    static readFully(self: Source, out: number[], offset: number, length: number): void;
    static readShortLittleEndian(self: Source): number;
    static release(self: Source): void;
    static takeWhile(self: Source, block: (param0: Buffer) => boolean): void;
}