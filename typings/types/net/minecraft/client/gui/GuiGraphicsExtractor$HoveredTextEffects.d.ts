import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class GuiGraphicsExtractor$HoveredTextEffects extends Enum<GuiGraphicsExtractor$HoveredTextEffects> {
    static NONE: GuiGraphicsExtractor$HoveredTextEffects;
    static TOOLTIP_AND_CURSOR: GuiGraphicsExtractor$HoveredTextEffects;
    static TOOLTIP_ONLY: GuiGraphicsExtractor$HoveredTextEffects;
    static notClickable(paramcanTooltip: boolean): GuiGraphicsExtractor$HoveredTextEffects;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GuiGraphicsExtractor$HoveredTextEffects;
    static values(): (Object | null)[];
    private constructor(allowTooltip: boolean, allowCursorChanges: boolean)
    allowCursorChanges: boolean;
    allowTooltip: boolean;
    name(): "NONE" | "TOOLTIP_ONLY" | "TOOLTIP_AND_CURSOR";
}