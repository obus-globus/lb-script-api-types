import type { Object } from '../../java/lang/Object.d.ts'
export class _Utf16Kt extends Object {
    static combineSurrogates(high: number, low: number): number;
    static isHighSurrogate(paramarg0: number): boolean;
    static isLowSurrogate(paramarg0: number): boolean;
    static isSurrogate(paramarg0: number): boolean;
}