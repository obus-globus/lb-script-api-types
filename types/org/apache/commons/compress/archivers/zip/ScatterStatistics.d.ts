import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ScatterStatistics extends Object {
    constructor(arg0: number, arg1: number)
    readonly compressionElapsed: number;
    readonly mergingElapsed: number;
    getCompressionElapsed(): number;
    getMergingElapsed(): number;
    toString(): string;
}