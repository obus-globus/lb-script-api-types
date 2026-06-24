import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { OptionInstance } from '../../../../../../net/minecraft/client/OptionInstance.d.ts'
import type { Options } from '../../../../../../net/minecraft/client/Options.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { CycleButton } from '../../../../../../net/minecraft/client/gui/components/CycleButton.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { OptionsSubScreen } from '../../../../../../net/minecraft/client/gui/screens/options/OptionsSubScreen.d.ts'
import type { PlayerSocialManager } from '../../../../../../net/minecraft/client/gui/screens/social/PlayerSocialManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class OnlineOptionsScreen extends OptionsSubScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static confirmFriendsListEnabled(paramminecraft: Minecraft, paramonEnabled: () => void, paramlastScreen: Screen): void;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: Screen, options: Options)
    // private allowFriendRequestsButton: CycleButton<boolean>;
    // private friendsListButton: CycleButton<boolean>;
    // private inGameNotificationButton: CycleButton<boolean>;
    // private presenceWidget: AbstractWidget;
    addOptions(): void;
    // private onFriendsListToggled(newValue: boolean, playerSocialManager: PlayerSocialManager, inGameNotificationOpt: OptionInstance<boolean>): void;
    // private updateFriendListDependentButtons(): void;
}