import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BlendFactor extends Enum<BlendFactor> {
    static CONSTANT_ALPHA: BlendFactor;
    static CONSTANT_COLOR: BlendFactor;
    static DST_ALPHA: BlendFactor;
    static DST_COLOR: BlendFactor;
    static ONE: BlendFactor;
    static ONE_MINUS_CONSTANT_ALPHA: BlendFactor;
    static ONE_MINUS_CONSTANT_COLOR: BlendFactor;
    static ONE_MINUS_DST_ALPHA: BlendFactor;
    static ONE_MINUS_DST_COLOR: BlendFactor;
    static ONE_MINUS_SRC_ALPHA: BlendFactor;
    static ONE_MINUS_SRC_COLOR: BlendFactor;
    static SRC_ALPHA: BlendFactor;
    static SRC_ALPHA_SATURATE: BlendFactor;
    static SRC_COLOR: BlendFactor;
    static ZERO: BlendFactor;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BlendFactor;
    static values(): BlendFactor[];
    private constructor()
    name(): "CONSTANT_ALPHA" | "CONSTANT_COLOR" | "DST_ALPHA" | "DST_COLOR" | "ONE" | "ONE_MINUS_CONSTANT_ALPHA" | "ONE_MINUS_CONSTANT_COLOR" | "ONE_MINUS_DST_ALPHA" | "ONE_MINUS_DST_COLOR" | "ONE_MINUS_SRC_ALPHA" | "ONE_MINUS_SRC_COLOR" | "SRC_ALPHA" | "SRC_ALPHA_SATURATE" | "SRC_COLOR" | "ZERO";
}