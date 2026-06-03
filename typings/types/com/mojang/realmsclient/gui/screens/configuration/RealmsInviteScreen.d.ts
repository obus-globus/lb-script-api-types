import type { RealmsServer } from '../../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { RealmsConfigureWorldScreen } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsConfigureWorldScreen.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { EditBox } from '../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsScreen } from '../../../../../../net/minecraft/realms/RealmsScreen.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class RealmsInviteScreen extends RealmsScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(configureScreen: RealmsConfigureWorldScreen, serverData: RealmsServer)
    // private configureScreen: RealmsConfigureWorldScreen;
    // private inviteButton: Button;
    // private layout: HeaderAndFooterLayout;
    // private message: Component;
    // private profileName: EditBox;
    // private serverData: RealmsServer;
    extractRenderState(graphics: GuiGraphicsExtractor, xm: number, ym: number, a: number): void;
    init(): void;
    init(width: number, height: number): void;
    onClose(): void;
    // private onInvite(): void;
    repositionElements(): void;
    setInitialFocus(): void;
    setInitialFocus(target: GuiEventListener): void;
    // private showMessage(message: Component): void;
}