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
    static isIsoControl(paramarg0: number): boolean;
    static isUtf8Continuation(paramarg0: number): boolean;
    static process2Utf8Bytes(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => void): number;
    static process3Utf8Bytes(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => void): number;
    static process4Utf8Bytes(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => void): number;
    static processUtf16Chars(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => void): void;
    static processUtf8Bytes(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => void): void;
    static processUtf8CodePoints(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => void): void;
    static size(paramarg0: string): number;
    static size(paramarg0: string, paramarg1: number): number;
    static size(paramarg0: string, paramarg1: number, paramarg2: number): number;
}