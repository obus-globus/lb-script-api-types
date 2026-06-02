import type { Window } from '../../../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DeltaTracker } from '../../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ContextualBarRenderer } from '../../../../../net/minecraft/client/gui/contextualbar/ContextualBarRenderer.d.ts'
import type { PlayerRideableJumping } from '../../../../../net/minecraft/world/entity/PlayerRideableJumping.d.ts'
export class JumpableVehicleBarRenderer extends Object implements ContextualBarRenderer {
    static EMPTY: ContextualBarRenderer;
    static HEIGHT: number;
    static MARGIN_BOTTOM: number;
    static WIDTH: number;
    static extractExperienceLevel(paramgraphics: GuiGraphicsExtractor, paramfont: Font, paramexperienceLevel: number): void;
    constructor(minecraft: Minecraft)
    // private minecraft: Minecraft;
    // private playerJumpableVehicle: PlayerRideableJumping;
    extractBackground(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    extractRenderState(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    left(window: Window): number;
    top(window: Window): number;
}