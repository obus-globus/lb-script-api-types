import type { MixinChatScreenAccessor } from '../../../../../net/ccbluex/liquidbounce/injection/mixins/minecraft/gui/MixinChatScreenAccessor.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ChatComponent$DisplayMode } from '../../../../../net/minecraft/client/gui/components/ChatComponent$DisplayMode.d.ts'
import type { CommandSuggestions } from '../../../../../net/minecraft/client/gui/components/CommandSuggestions.d.ts'
import type { EditBox } from '../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { ChatScreen$ExitReason } from '../../../../../net/minecraft/client/gui/screens/ChatScreen$ExitReason.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ChatScreen extends Screen implements MixinChatScreenAccessor {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static MOUSE_SCROLL_SPEED: number;
    static USAGE_BACKGROUND_COLOR: number;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(initial: string, isDraft: boolean)
    constructor(initial: string, isDraft: boolean, closeOnSubmit: boolean)
    // private closeOnSubmit: boolean;
    // private commandSuggestions: CommandSuggestions;
    // private displayMode: ChatComponent$DisplayMode;
    // private exitReason: ChatScreen$ExitReason;
    // private historyBuffer: string;
    // private historyPos: number;
    // private initial: string;
    input: EditBox;
    // private isDraft: boolean;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private formatChat(text: string, offset: number): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    // private getActiveMessage(arg0: MouseButtonEvent): number;
    getInput(): EditBox;
    handleChatInput(msg: string, addToRecent: boolean): void;
    // private handleComponentClicked(clicked: Style, allowInsertions: boolean): boolean;
    init(): void;
    init(width: number, height: number): void;
    insertText(text: string, replace: boolean): void;
    // private insertionClickMode(): boolean;
    isAllowedInPortal(): boolean;
    isPauseScreen(): boolean;
    keyPressed(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    moveInHistory(dir: number): void;
    normalizeChatMessage(message: string): string;
    onClose(): void;
    // private onEdited(value: string): void;
    removed(): void;
    resize(width: number, height: number): void;
    setInitialFocus(): void;
    setInitialFocus(target: GuiEventListener): void;
    shouldDiscardDraft(): boolean;
    updateNarrationState(output: NarrationElementOutput): void;
    // private viaFabricPlus$keepTabComplete(): boolean;
}