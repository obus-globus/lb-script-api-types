import type { FloatConsumer } from '../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChunkedSampleByteBuf extends Object implements FloatConsumer {
    constructor(bufferSize: number)
    // private bufferSize: number;
    // private buffers: ByteBuffer[];
    // private byteCount: number;
    // private currentBuffer: ByteBuffer;
    accept(arg0: number): void;
    accept(arg0: number): void;
    accept(arg0: number): void;
    accept(arg0: number): void;
    accept(sample: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    get(): ByteBuffer;
    size(): number;
}