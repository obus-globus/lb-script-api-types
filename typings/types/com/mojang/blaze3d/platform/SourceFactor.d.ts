import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SourceFactor extends Enum<SourceFactor> {
    static CONSTANT_ALPHA: SourceFactor;
    static CONSTANT_COLOR: SourceFactor;
    static DST_ALPHA: SourceFactor;
    static DST_COLOR: SourceFactor;
    static ONE: SourceFactor;
    static ONE_MINUS_CONSTANT_ALPHA: SourceFactor;
    static ONE_MINUS_CONSTANT_COLOR: SourceFactor;
    static ONE_MINUS_DST_ALPHA: SourceFactor;
    static ONE_MINUS_DST_COLOR: SourceFactor;
    static ONE_MINUS_SRC_ALPHA: SourceFactor;
    static ONE_MINUS_SRC_COLOR: SourceFactor;
    static SRC_ALPHA: SourceFactor;
    static SRC_ALPHA_SATURATE: SourceFactor;
    static SRC_COLOR: SourceFactor;
    static ZERO: SourceFactor;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SourceFactor;
    static values(): (Object | null)[];
    private constructor()
    name(): "CONSTANT_ALPHA" | "CONSTANT_COLOR" | "DST_ALPHA" | "DST_COLOR" | "ONE" | "ONE_MINUS_CONSTANT_ALPHA" | "ONE_MINUS_CONSTANT_COLOR" | "ONE_MINUS_DST_ALPHA" | "ONE_MINUS_DST_COLOR" | "ONE_MINUS_SRC_ALPHA" | "ONE_MINUS_SRC_COLOR" | "SRC_ALPHA" | "SRC_ALPHA_SATURATE" | "SRC_COLOR" | "ZERO";
}