import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DeltaTracker } from '../../../../../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export interface HudElement extends Object{
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: DeltaTracker): void;
}