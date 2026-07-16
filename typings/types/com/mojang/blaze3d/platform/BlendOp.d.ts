import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BlendOp extends Enum<BlendOp> {
    static ADD: BlendOp;
    static MAX: BlendOp;
    static MIN: BlendOp;
    static REVERSE_SUBTRACT: BlendOp;
    static SUBTRACT: BlendOp;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BlendOp;
    static values(): BlendOp[];
    private constructor()
    name(): "ADD" | "SUBTRACT" | "REVERSE_SUBTRACT" | "MIN" | "MAX";
}