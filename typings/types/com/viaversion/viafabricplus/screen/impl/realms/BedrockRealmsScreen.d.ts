import type { VFPScreen } from '../../../../../../com/viaversion/viafabricplus/screen/VFPScreen.d.ts'
import type { BedrockRealmsScreen$SlotList } from '../../../../../../com/viaversion/viafabricplus/screen/impl/realms/BedrockRealmsScreen$SlotList.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { RealmsServer } from '../../../../../../net/raphimc/minecraftauth/extra/realms/model/RealmsServer.d.ts'
import type { BedrockRealmsService } from '../../../../../../net/raphimc/minecraftauth/extra/realms/service/impl/BedrockRealmsService.d.ts'
export class BedrockRealmsScreen extends VFPScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INSTANCE: BedrockRealmsScreen;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    static setScreen(paramarg0: Screen): void;
    static showErrorScreen(paramarg0: Component, paramarg1: Throwable, paramarg2: Screen): void;
    constructor()
    // private joinButton: Button;
    // private leaveButton: Button;
    // private realmsServers: RealmsServer[];
    // private service: BedrockRealmsService;
    // private slotList: BedrockRealmsScreen$SlotList;
    // private createView(): void;
    // private error(arg0: string, arg1: Throwable): void;
    init(): void;
    init(width: number, height: number): void;
    // private loadRealms(): void;
    subtitleCentered(): boolean;
    tick(): void;
}