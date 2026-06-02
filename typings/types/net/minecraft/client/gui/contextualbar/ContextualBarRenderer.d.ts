import type { Window } from '../../../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DeltaTracker } from '../../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export interface ContextualBarRenderer extends Object{
    extractBackground(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    extractRenderState(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    left(window: Window): number;
    top(window: Window): number;
}