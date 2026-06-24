import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { EditBox } from '../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { StringWidget } from '../../../../../net/minecraft/client/gui/components/StringWidget.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { IntegratedServer } from '../../../../../net/minecraft/client/server/IntegratedServer.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer$MultiplayerScope } from '../../../../../net/minecraft/server/MinecraftServer$MultiplayerScope.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
export class MultiplayerOptionsScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: Screen)
    // private applyChanges: Button;
    // private commands: boolean;
    // private gameMode: GameType;
    // private initialCommands: boolean;
    // private initialGameMode: GameType;
    // private initialMultiplayerScope: MinecraftServer$MultiplayerScope;
    // private initialPort: number;
    // private lastScreen: Screen;
    // private layout: HeaderAndFooterLayout;
    // private port: number;
    // private portEdit: EditBox;
    // private portLabel: StringWidget;
    // private portValid: boolean;
    // private wantedMultiplayerScope: MinecraftServer$MultiplayerScope;
    // private changeMultiplayerScope(singleplayerServer: IntegratedServer): void;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private hasSettingsChanges(): boolean;
    init(): void;
    init(width: number, height: number): void;
    // private lanPortChanged(): boolean;
    onClose(): void;
    // private portIsRequired(): boolean;
    // private publish(singleplayerServer: IntegratedServer, scope: MinecraftServer$MultiplayerScope): void;
    repositionElements(): void;
    // private sendPublishMessage(message: Component): void;
    // private setPortError(errorMessage: Component): void;
    // private tryParsePort(value: string): Component;
    // private updateApplyChangesActiveState(): void;
    // private updatePortControlsState(): void;
}