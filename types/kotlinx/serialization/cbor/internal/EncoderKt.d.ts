import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ByteArrayOutput } from '../../../../kotlinx/serialization/cbor/internal/ByteArrayOutput.d.ts'
export class EncoderKt extends Object {
    static encodeBoolean(paramarg0: ByteArrayOutput, paramarg1: boolean): void;
    static encodeByteArray(paramarg0: ByteArrayOutput, paramarg1: number[], paramarg2: number): void;
    static encodeByteString(paramarg0: ByteArrayOutput, paramarg1: number[]): void;
    static encodeDouble(paramarg0: ByteArrayOutput, paramarg1: number): void;
    static encodeEmptyMap(paramarg0: ByteArrayOutput): void;
    static encodeFloat(paramarg0: ByteArrayOutput, paramarg1: number): void;
    static encodeNull(paramarg0: ByteArrayOutput): void;
    static encodeNumber(paramarg0: ByteArrayOutput, paramarg1: number): void;
    static encodeString(paramarg0: ByteArrayOutput, paramarg1: string): void;
    static end(paramarg0: ByteArrayOutput): void;
    static writeByte(paramarg0: ByteArrayOutput, paramarg1: number): void;
}