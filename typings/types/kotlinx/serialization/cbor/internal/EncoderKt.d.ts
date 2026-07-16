import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ByteArrayOutput } from '../../../../kotlinx/serialization/cbor/internal/ByteArrayOutput.d.ts'
export class EncoderKt extends Object {
    static encodeBoolean(self: ByteArrayOutput, value: boolean): void;
    static encodeByteArray(self: ByteArrayOutput, data: number[], type: number): void;
    static encodeByteString(self: ByteArrayOutput, data: number[]): void;
    static encodeDouble(self: ByteArrayOutput, value: number): void;
    static encodeEmptyMap(self: ByteArrayOutput): void;
    static encodeFloat(self: ByteArrayOutput, value: number): void;
    static encodeNull(self: ByteArrayOutput): void;
    static encodeNumber(self: ByteArrayOutput, value: number): void;
    static encodeString(self: ByteArrayOutput, value: string): void;
    static end(self: ByteArrayOutput): void;
    static writeByte(self: ByteArrayOutput, byteValue: number): void;
}