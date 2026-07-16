import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteString } from '../../../kotlinx/io/bytestring/ByteString.d.ts'
export class ByteStringKt extends Object {
    static ByteString(): ByteString;
    static ByteString(...bytes: number[]): ByteString;
// (invalid TS: name contains '-')     static ByteString-GBYM_sE(...bytes: (Object | null)[]): ByteString;
    static contentEquals(self: ByteString, array: number[]): boolean;
    static decodeToString(self: ByteString): string;
    static encodeToByteString(self: string): ByteString;
    static endsWith(self: ByteString, byteArray: number[]): boolean;
    static endsWith(self: ByteString, byteString: ByteString): boolean;
    static getIndices(paramarg0: ByteString): { start: number; endInclusive: number; step: number };
    static indexOf(self: ByteString, byte: number, startIndex: number): number;
    static indexOf(self: ByteString, byteArray: number[], startIndex: number): number;
    static indexOf(self: ByteString, byteString: ByteString, startIndex: number): number;
    static isEmpty(self: ByteString): boolean;
    static isNotEmpty(self: ByteString): boolean;
    static lastIndexOf(self: ByteString, byte: number, startIndex: number): number;
    static lastIndexOf(self: ByteString, byteArray: number[], startIndex: number): number;
    static lastIndexOf(self: ByteString, byteString: ByteString, startIndex: number): number;
    static startsWith(self: ByteString, byteArray: number[]): boolean;
    static startsWith(self: ByteString, byteString: ByteString): boolean;
}