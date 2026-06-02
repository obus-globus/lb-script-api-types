import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface JCodingsProvider$Encoding extends Object{
    codeToMbc(codepoint: number, array: number[], index: number): number;
    codeToMbcLength(codepoint: number): number;
    getCharsetName(): string;
    getName(): number[];
    isFixedWidth(): boolean;
    isSingleByte(): boolean;
    isUnicode(): boolean;
    length(array: number[], index: number, arrayLength: number): number;
    maxLength(): number;
    mbcToCode(array: number[], index: number, arrayEnd: number): number;
    minLength(): number;
    prevCharHead(array: number[], arrayBegin: number, index: number, arrayEnd: number): number;
}