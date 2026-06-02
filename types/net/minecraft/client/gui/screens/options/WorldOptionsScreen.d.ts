import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { DifficultyButtons } from '../../../../../../net/minecraft/client/gui/screens/options/DifficultyButtons.d.ts'
import type { HasDifficultyReaction } from '../../../../../../net/minecraft/client/gui/screens/options/HasDifficultyReaction.d.ts'
import type { HasGamemasterPermissionReaction } from '../../../../../../net/minecraft/client/gui/screens/options/HasGamemasterPermissionReaction.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class WorldOptionsScreen extends Screen implements HasDifficultyReaction, HasGamemasterPermissionReaction {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: Screen, level: Level)
    // private difficultyButtons: DifficultyButtons;
    // private lastScreen: Screen;
    // private layout: HeaderAndFooterLayout;
    added(): void;
    // private createGameRulesButton(): Button;
    // private createRestrictionsButton(): Button;
    init(): void;
    onClose(): void;
    onDifficultyChanged(): void;
    onGamemasterPermissionChanged(hasGamemasterPermission: boolean): void;
    repositionElements(): void;
}