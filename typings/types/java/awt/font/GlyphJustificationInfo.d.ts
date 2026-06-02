import type { Object } from '../../../java/lang/Object.d.ts'
export class GlyphJustificationInfo extends Object {
    static PRIORITY_INTERCHAR: number;
    static PRIORITY_KASHIDA: number;
    static PRIORITY_NONE: number;
    static PRIORITY_WHITESPACE: number;
    constructor(arg0: number, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: number, arg8: number)
    growAbsorb: boolean;
    growLeftLimit: number;
    growPriority: number;
    growRightLimit: number;
    shrinkAbsorb: boolean;
    shrinkLeftLimit: number;
    shrinkPriority: number;
    shrinkRightLimit: number;
    weight: number;
}