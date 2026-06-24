import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Segment extends Object {
    constructor(arg0: number, arg1: number, arg2: CharSequence)
    limit: number;
    ruleStatus: number;
    // private source: CharSequence;
    start: number;
    getSubSequence(): CharSequence;
}