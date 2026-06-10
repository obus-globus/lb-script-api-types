import type { RealmsServer$WorldType } from '../../../../../../com/mojang/realmsclient/dto/RealmsServer$WorldType.d.ts'
import type { RealmsSlot } from '../../../../../../com/mojang/realmsclient/dto/RealmsSlot.d.ts'
import type { RealmsConfigureWorldScreen } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsConfigureWorldScreen.d.ts'
import type { RealmsSlotOptionsScreen$SettingsSlider } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsSlotOptionsScreen$SettingsSlider.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { StringWidget } from '../../../../../../net/minecraft/client/gui/components/StringWidget.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsScreen } from '../../../../../../net/minecraft/realms/RealmsScreen.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Difficulty } from '../../../../../../net/minecraft/world/Difficulty.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { GameType } from '../../../../../../net/minecraft/world/level/GameType.d.ts'
export class RealmsSlotOptionsScreen extends RealmsScreen {
    static DIFFICULTIES: Difficulty[];
    static FOOTER_SEPARATOR: Identifier;
    static GAME_MODES: GameType[];
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(configureWorldScreen: RealmsConfigureWorldScreen, slot: RealmsSlot, worldType: RealmsServer$WorldType, activeSlot: number)
    // private defaultSlotName: string;
    // private difficulty: Difficulty;
    // private forceGameMode: boolean;
    // private gameMode: GameType;
    // private layout: HeaderAndFooterLayout;
    // private parentScreen: RealmsConfigureWorldScreen;
    // private slot: RealmsSlot;
    // private spawnProtection: number;
    // private spawnProtectionButton: RealmsSlotOptionsScreen$SettingsSlider;
    // private warningHeader: StringWidget;
    // private worldName: string;
    // private worldType: RealmsServer$WorldType;
    getNarrationMessage(): Component;
    init(): void;
    init(width: number, height: number): void;
    onClose(): void;
    repositionElements(): void;
    // private saveSettings(): void;
    // private setWorldName(value: string): void;
}