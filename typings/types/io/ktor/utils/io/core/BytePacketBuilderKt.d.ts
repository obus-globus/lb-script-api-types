import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Sink } from '../../../../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../../../../kotlinx/io/Source.d.ts'
export class BytePacketBuilderKt extends Object {
    static BytePacketBuilder(): Sink;
    static append(self: Sink, value: CharSequence, startIndex: number, endIndex: number): void;
    static build(self: Sink): Source;
    static getSize(paramarg0: Sink): number;
    static writeFully(self: Sink, buffer: number[], offset: number, length: number): void;
    static writePacket(self: Sink, packet: Source): void;
}