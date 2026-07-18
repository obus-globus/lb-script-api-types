import type { HttpMethod } from '../../../../../io/ktor/http/HttpMethod.d.ts'
import type { AsciiCharTree } from '../../../../../io/ktor/http/cio/internals/AsciiCharTree.d.ts'
import type { ByteWriteChannel } from '../../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class CharsKt extends Object {
    static HTAB: string;
    static equalsLowerCase(self: CharSequence, start: number, end: number, other: CharSequence): boolean;
    static getDefaultHttpMethods(): AsciiCharTree<HttpMethod>;
    static getHexLetterTable(): number[];
    static getHexTable(): number[];
    static hashCodeLowerCase(self: CharSequence, start: number, end: number): number;
    static parseDecLong(self: CharSequence): number;
    static writeIntHex(self: ByteWriteChannel, value: number): void;
}