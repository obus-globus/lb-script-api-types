import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { ScreenDirection } from '../../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { ChatSelectionLogFiller$Output } from '../../../../../../net/minecraft/client/gui/screens/reporting/ChatSelectionLogFiller$Output.d.ts'
import type { ChatSelectionScreen$ChatSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/screens/reporting/ChatSelectionScreen$ChatSelectionList$Entry.d.ts'
import type { ChatSelectionScreen$ChatSelectionList$Heading } from '../../../../../../net/minecraft/client/gui/screens/reporting/ChatSelectionScreen$ChatSelectionList$Heading.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { LoggedChatMessage$Player } from '../../../../../../net/minecraft/client/multiplayer/chat/LoggedChatMessage$Player.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class ChatSelectionScreen$ChatSelectionList extends ObjectSelectionList<ChatSelectionScreen$ChatSelectionList$Entry> implements ChatSelectionLogFiller$Output {
    static ITEM_HEIGHT: number;
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: ChatSelectionScreen$ChatSelectionList, minecraft: Minecraft, upperMargin: number)
    // private previousHeading: ChatSelectionScreen$ChatSelectionList$Heading;
    acceptDivider(text: Component): void;
    acceptMessage(id: number, message: LoggedChatMessage$Player): void;
    extractItem(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number, entry: ChatSelectionScreen$ChatSelectionList$Entry): void;
    getFooterTop(): number;
    getMaxVisibleEntries(): number;
    getRowWidth(): number;
    keyPressed(event: KeyEvent): boolean;
    nextEntry(dir: ScreenDirection): ChatSelectionScreen$ChatSelectionList$Entry;
    setScrollAmount(scrollAmount: number): void;
    setSelected(selected: ChatSelectionScreen$ChatSelectionList$Entry): void;
    // private shouldHighlightEntry(entry: ChatSelectionScreen$ChatSelectionList$Entry): boolean;
    // private updateHeading(message: LoggedChatMessage$Player, canReport: boolean): void;
}