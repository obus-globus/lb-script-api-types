import type { Appendable } from '../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Base64 } from '../../../kotlin/io/encoding/Base64.d.ts'
import type { ByteString } from '../../../kotlinx/io/bytestring/ByteString.d.ts'
export class Base64Kt extends Object {
    static decode(self: Base64, source: ByteString, startIndex: number, endIndex: number): number[];
    static decodeIntoByteArray(self: Base64, source: ByteString, destination: number[], destinationOffset: number, startIndex: number, endIndex: number): number;
    static decodeToByteString(self: Base64, source: number[], startIndex: number, endIndex: number): ByteString;
    static decodeToByteString(self: Base64, source: CharSequence, startIndex: number, endIndex: number): ByteString;
    static decodeToByteString(self: Base64, source: ByteString, startIndex: number, endIndex: number): ByteString;
    static encode(self: Base64, source: ByteString, startIndex: number, endIndex: number): string;
    static encodeIntoByteArray(self: Base64, source: ByteString, destination: number[], destinationOffset: number, startIndex: number, endIndex: number): number;
    static encodeToAppendable<A extends Appendable>(self: Base64, source: ByteString, destination: A, startIndex: number, endIndex: number): A;
    static encodeToByteArray(self: Base64, source: ByteString, startIndex: number, endIndex: number): number[];
}