import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { LoadingDotsWidget } from '../../../../../../net/minecraft/client/gui/components/LoadingDotsWidget.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { HasGamemasterPermissionReaction } from '../../../../../../net/minecraft/client/gui/screens/options/HasGamemasterPermissionReaction.d.ts'
import type { AbstractGameRulesScreen } from '../../../../../../net/minecraft/client/gui/screens/worldselection/AbstractGameRulesScreen.d.ts'
import type { ClientPacketListener } from '../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ServerboundSetGameRulePacket$Entry } from '../../../../../../net/minecraft/network/protocol/game/ServerboundSetGameRulePacket$Entry.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { GameRule } from '../../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
import type { GameRuleMap } from '../../../../../../net/minecraft/world/level/gamerules/GameRuleMap.d.ts'
import type { GameRules } from '../../../../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
export class InWorldGameRulesScreen extends AbstractGameRulesScreen implements HasGamemasterPermissionReaction {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(connection: ClientPacketListener, exitCallback: (param0: Optional<GameRules>) => void, lastScreen: Screen)
    // private connection: ClientPacketListener;
    // private initialValues: GameRuleMap;
    // private lastScreen: Screen;
    // private loadingDotsWidget: LoadingDotsWidget;
    // private receivedServerValues: boolean;
    // private serverProvidedRules: GameRule<Object>[];
    // private collectChangedGameRule<T extends unknown>(rule: GameRule<T>, entries: ServerboundSetGameRulePacket$Entry[]): void;
    // private hasGameRuleChanged<T extends unknown>(rule: GameRule<T>): boolean;
    // private hasPendingChanges(): boolean;
    initContent(): void;
    // private initializeGameRuleValue<T extends unknown>(rule: GameRule<T>, valueStr: string): void;
    onClose(): void;
    onDone(): void;
    onGameRuleValuesUpdated(values: JavaMap<ResourceKey<GameRule<Object>>, string>): void;
    onGamemasterPermissionChanged(hasGamemasterPermission: boolean): void;
}