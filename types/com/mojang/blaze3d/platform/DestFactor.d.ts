import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DestFactor extends Enum<DestFactor> {
    static CONSTANT_ALPHA: DestFactor;
    static CONSTANT_COLOR: DestFactor;
    static DST_ALPHA: DestFactor;
    static DST_COLOR: DestFactor;
    static ONE: DestFactor;
    static ONE_MINUS_CONSTANT_ALPHA: DestFactor;
    static ONE_MINUS_CONSTANT_COLOR: DestFactor;
    static ONE_MINUS_DST_ALPHA: DestFactor;
    static ONE_MINUS_DST_COLOR: DestFactor;
    static ONE_MINUS_SRC_ALPHA: DestFactor;
    static ONE_MINUS_SRC_COLOR: DestFactor;
    static SRC_ALPHA: DestFactor;
    static SRC_COLOR: DestFactor;
    static ZERO: DestFactor;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DestFactor;
    static values(): (Object | null)[];
    private constructor()
    name(): "CONSTANT_ALPHA" | "CONSTANT_COLOR" | "DST_ALPHA" | "DST_COLOR" | "ONE" | "ONE_MINUS_CONSTANT_ALPHA" | "ONE_MINUS_CONSTANT_COLOR" | "ONE_MINUS_DST_ALPHA" | "ONE_MINUS_DST_COLOR" | "ONE_MINUS_SRC_ALPHA" | "ONE_MINUS_SRC_COLOR" | "SRC_ALPHA" | "SRC_COLOR" | "ZERO";
}