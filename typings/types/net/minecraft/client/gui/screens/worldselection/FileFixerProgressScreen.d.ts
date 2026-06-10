import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { UpgradeProgress } from '../../../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class FileFixerProgressScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(upgradeProgress: UpgradeProgress)
    // private cancelButton: Button;
    // private upgradeProgress: UpgradeProgress;
    // private extractFileFixerCount(graphics: GuiGraphicsExtractor, xCenter: number, y: number, current: number, total: number): void;
    // private extractFileStats(graphics: GuiGraphicsExtractor, xCenter: number, yStart: number, converted: number, total: number): void;
    // private extractProgress(graphics: GuiGraphicsExtractor, xCenter: number, textTop: number): void;
    // private extractProgressBar(graphics: GuiGraphicsExtractor, xCenter: number, y: number, progress: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, partialTick: number): void;
    // private extractScanning(graphics: GuiGraphicsExtractor, xCenter: number, textTop: number): void;
    // private extractTitle(graphics: GuiGraphicsExtractor, xCenter: number, yTop: number): void;
    // private extractTypeProgress(graphics: GuiGraphicsExtractor, xCenter: number, y: number, progress: number): void;
    // private extractTypeText(graphics: GuiGraphicsExtractor, xCenter: number, y: number): void;
    init(): void;
    init(width: number, height: number): void;
    shouldCloseOnEsc(): boolean;
}