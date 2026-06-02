import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class GuiRenderState$TraverseRange extends Enum<GuiRenderState$TraverseRange> {
    static AFTER_BLUR: GuiRenderState$TraverseRange;
    static ALL: GuiRenderState$TraverseRange;
    static BEFORE_BLUR: GuiRenderState$TraverseRange;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GuiRenderState$TraverseRange;
    static values(): (Object | null)[];
    private constructor()
    name(): "ALL" | "BEFORE_BLUR" | "AFTER_BLUR";
}