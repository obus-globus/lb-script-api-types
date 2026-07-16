import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CborDecodingException } from '../../../../kotlinx/serialization/cbor/internal/CborDecodingException.d.ts'
export class CborDecodingExceptionKt extends Object {
    static CborDecodingException(expected: string, foundByte: number): CborDecodingException;
    static printByte(b: number): string;
}