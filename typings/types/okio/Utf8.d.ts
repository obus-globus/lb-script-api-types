import type { Object } from '../java/lang/Object.d.ts'
export class Utf8 extends Object {
    static HIGH_SURROGATE_HEADER: number;
    static LOG_SURROGATE_HEADER: number;
    static MASK_2BYTES: number;
    static MASK_3BYTES: number;
    static MASK_4BYTES: number;
    static REPLACEMENT_BYTE: number;
    static REPLACEMENT_CHARACTER: string;
    static REPLACEMENT_CODE_POINT: number;
    static isIsoControl(codePoint: number): boolean;
    static isUtf8Continuation(byte: number): boolean;
    static process2Utf8Bytes(self: number[], beginIndex: number, endIndex: number, yield_: (param0: number) => void): number;
    static process3Utf8Bytes(self: number[], beginIndex: number, endIndex: number, yield_: (param0: number) => void): number;
    static process4Utf8Bytes(self: number[], beginIndex: number, endIndex: number, yield_: (param0: number) => void): number;
    static processUtf16Chars(self: number[], beginIndex: number, endIndex: number, yield_: (param0: string) => void): void;
    static processUtf8Bytes(self: string, beginIndex: number, endIndex: number, yield_: (param0: number) => void): void;
    static processUtf8CodePoints(self: number[], beginIndex: number, endIndex: number, yield_: (param0: number) => void): void;
    static size(paramarg0: string): number;
    static size(paramarg0: string, paramarg1: number): number;
    static size(self: string, beginIndex: number, endIndex: number): number;
}