import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteString } from '../../../kotlinx/io/bytestring/ByteString.d.ts'
export class ByteStringKt extends Object {
    static ByteString(): ByteString;
    static ByteString(...paramarg0: number[]): ByteString;
// (invalid TS: name contains '-')     static ByteString-GBYM_sE(...paramarg0: number[]): ByteString;
    static contentEquals(paramarg0: ByteString, paramarg1: number[]): boolean;
    static decodeToString(paramarg0: ByteString): string;
    static encodeToByteString(paramarg0: string): ByteString;
    static endsWith(paramarg0: ByteString, paramarg1: number[]): boolean;
    static endsWith(paramarg0: ByteString, paramarg1: ByteString): boolean;
    static getIndices(paramarg0: ByteString): { start: number; endInclusive: number; step: number };
    static indexOf(paramarg0: ByteString, paramarg1: number, paramarg2: number): number;
    static indexOf(paramarg0: ByteString, paramarg1: number[], paramarg2: number): number;
    static indexOf(paramarg0: ByteString, paramarg1: ByteString, paramarg2: number): number;
    static isEmpty(paramarg0: ByteString): boolean;
    static isNotEmpty(paramarg0: ByteString): boolean;
    static lastIndexOf(paramarg0: ByteString, paramarg1: number, paramarg2: number): number;
    static lastIndexOf(paramarg0: ByteString, paramarg1: number[], paramarg2: number): number;
    static lastIndexOf(paramarg0: ByteString, paramarg1: ByteString, paramarg2: number): number;
    static startsWith(paramarg0: ByteString, paramarg1: number[]): boolean;
    static startsWith(paramarg0: ByteString, paramarg1: ByteString): boolean;
}