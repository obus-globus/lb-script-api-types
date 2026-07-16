import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class GuiRenderState$TraverseRange extends Enum<GuiRenderState$TraverseRange> {
    static AFTER_BLUR: GuiRenderState$TraverseRange;
    static ALL: GuiRenderState$TraverseRange;
    static BEFORE_BLUR: GuiRenderState$TraverseRange;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GuiRenderState$TraverseRange;
    static values(): GuiRenderState$TraverseRange[];
    private constructor()
    name(): "ALL" | "BEFORE_BLUR" | "AFTER_BLUR";
}