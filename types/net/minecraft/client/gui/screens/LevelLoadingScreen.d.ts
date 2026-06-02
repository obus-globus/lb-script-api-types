import type { ILevelLoadingScreen } from '../../../../../com/viaversion/viafabricplus/injection/access/networking/downloading_terrain/ILevelLoadingScreen.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { LevelLoadingScreen$Reason } from '../../../../../net/minecraft/client/gui/screens/LevelLoadingScreen$Reason.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { LevelLoadTracker } from '../../../../../net/minecraft/client/multiplayer/LevelLoadTracker.d.ts'
import type { TextureAtlasSprite } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ChunkLoadStatusView } from '../../../../../net/minecraft/server/level/progress/ChunkLoadStatusView.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class LevelLoadingScreen extends Screen implements ILevelLoadingScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractChunksForRendering(paramgraphics: GuiGraphicsExtractor, paramxCenter: number, paramyCenter: number, paramsize: number, parammargin: number, paramstatusView: ChunkLoadStatusView): void;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(loadTracker: LevelLoadTracker, reason: LevelLoadingScreen$Reason)
    // private cachedNetherPortalSprite: TextureAtlasSprite;
    // private lastNarration: number;
    // private loadTracker: LevelLoadTracker;
    // private reason: LevelLoadingScreen$Reason;
    // private smoothedProgress: number;
    // private viaFabricPlus$closeOnNextTick: boolean;
    // private viaFabricPlus$loadStartTime: number;
    // private viaFabricPlus$ready: boolean;
    // private viaFabricPlus$tickCounter: number;
    // private drawProgressBar(graphics: GuiGraphicsExtractor, left: number, top: number, width: number, height: number, progress: number): void;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private getNetherPortalSprite(): TextureAtlasSprite;
    isPauseScreen(): boolean;
    onClose(): void;
    shouldCloseOnEsc(): boolean;
    shouldNarrateNavigation(): boolean;
    tick(): void;
    update(loadTracker: LevelLoadTracker, reason: LevelLoadingScreen$Reason): void;
    updateNarratedWidget(output: NarrationElementOutput): void;
    viaFabricPlus$setReady(): void;
}