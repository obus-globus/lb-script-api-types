import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class LineMetrics extends Object {
    constructor()
    getAscent(): number;
    getBaselineIndex(): number;
    getBaselineOffsets(): number[];
    getDescent(): number;
    getHeight(): number;
    getLeading(): number;
    getNumChars(): number;
    getStrikethroughOffset(): number;
    getStrikethroughThickness(): number;
    getUnderlineOffset(): number;
    getUnderlineThickness(): number;
}