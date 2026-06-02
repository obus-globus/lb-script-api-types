import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ZeroShotClassificationOutput extends Object {
    constructor(arg0: string, arg1: string[], arg2: number[])
    readonly labels: string[];
    readonly scores: number[];
    readonly sequence: string;
    getLabels(): string[];
    getScores(): number[];
    getSequence(): string;
}