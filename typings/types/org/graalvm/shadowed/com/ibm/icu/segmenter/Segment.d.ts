import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class Segment extends Object {
    constructor(start: number, limit: number, source: CharSequence)
    limit: number;
    ruleStatus: number;
    // private source: CharSequence;
    start: number;
    getSubSequence(): CharSequence;
}