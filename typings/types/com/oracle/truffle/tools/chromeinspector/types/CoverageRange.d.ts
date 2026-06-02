import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class CoverageRange extends Object {
    constructor(startOffset: number, endOffset: number, count: number)
    readonly count: number;
    readonly endOffset: number;
    readonly startOffset: number;
    getCount(): number;
    getEndOffset(): number;
    getStartOffset(): number;
    // private toJSON(): JSONObject;
}