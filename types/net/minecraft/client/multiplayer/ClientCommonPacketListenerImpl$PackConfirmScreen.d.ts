import type { URL } from '../../../../java/net/URL.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { ConfirmScreen } from '../../../../net/minecraft/client/gui/screens/ConfirmScreen.d.ts'
import type { Screen } from '../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest } from '../../../../net/minecraft/client/multiplayer/ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ClientCommonPacketListenerImpl$PackConfirmScreen extends ConfirmScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    private constructor(null_: ClientCommonPacketListenerImpl$PackConfirmScreen, parentScreen: Screen, requests: ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest[], required: boolean, prompt: Component)
    // private parentScreen: Screen;
    // private requests: ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest[];
    update(minecraft: Minecraft, id: UUID, url: URL, hash: string, required: boolean, prompt: Component): ClientCommonPacketListenerImpl$PackConfirmScreen;
}