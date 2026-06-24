import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BlendOp extends Enum<BlendOp> {
    static ADD: BlendOp;
    static MAX: BlendOp;
    static MIN: BlendOp;
    static REVERSE_SUBTRACT: BlendOp;
    static SUBTRACT: BlendOp;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BlendOp;
    static values(): (Object | null)[];
    private constructor()
    name(): "ADD" | "SUBTRACT" | "REVERSE_SUBTRACT" | "MIN" | "MAX";
}