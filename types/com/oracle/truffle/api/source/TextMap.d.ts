import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class TextMap extends Object {
    static fromCharSequence(paramtext: CharSequence): TextMap;
    constructor(nlOffsets: number[], textLength: number, newlineLength: number, newlineLengths: number[], finalNL: boolean)
    // private finalNL: boolean;
    // private newlineLength: number;
    // private newlineLengths: number[];
    // private nlOffsets: number[];
    // private textLength: number;
    length(): number;
    lineColumnToOffset(line: number, column: number): number;
    lineCount(): number;
    lineLength(line: number): number;
    // private lineOutOfRange(line: number): boolean;
    lineStartOffset(line: number): number;
    offsetToCol(offset: number): number;
    offsetToLine(offset: number): number;
}