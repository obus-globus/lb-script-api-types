import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BlendModeFunction extends Enum<BlendModeFunction> {
    static DST_ALPHA: BlendModeFunction;
    static DST_COLOR: BlendModeFunction;
    static ONE: BlendModeFunction;
    static ONE_MINUS_DST_ALPHA: BlendModeFunction;
    static ONE_MINUS_DST_COLOR: BlendModeFunction;
    static ONE_MINUS_SRC_ALPHA: BlendModeFunction;
    static ONE_MINUS_SRC_COLOR: BlendModeFunction;
    static SRC_ALPHA: BlendModeFunction;
    static SRC_ALPHA_SATURATE: BlendModeFunction;
    static SRC_COLOR: BlendModeFunction;
    static ZERO: BlendModeFunction;
    static fromString(paramarg0: string): Optional<BlendModeFunction>;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BlendModeFunction;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    readonly glId: number;
    getGlId(): number;
    name(): "ZERO" | "ONE" | "SRC_COLOR" | "ONE_MINUS_SRC_COLOR" | "DST_COLOR" | "ONE_MINUS_DST_COLOR" | "SRC_ALPHA" | "ONE_MINUS_SRC_ALPHA" | "DST_ALPHA" | "ONE_MINUS_DST_ALPHA" | "SRC_ALPHA_SATURATE";
}