import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { IntBuffer } from '../../../../../../../../../java/nio/IntBuffer.d.ts'
import type { IntConsumer } from '../../../../../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class StaticTopoData$QuadIndexConsumerIntoBuffer extends Record implements IntConsumer {
    private constructor(buffer: IntBuffer)
    // private buffer: IntBuffer;
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    buffer(): IntBuffer;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}