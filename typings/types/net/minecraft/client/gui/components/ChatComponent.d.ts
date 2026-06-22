import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MixinChatComponentAccessor } from '../../../../../net/ccbluex/liquidbounce/injection/mixins/minecraft/gui/MixinChatComponentAccessor.d.ts'
import type { ChatComponentAddition } from '../../../../../net/ccbluex/liquidbounce/interfaces/ChatComponentAddition.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ActiveTextCollector } from '../../../../../net/minecraft/client/gui/ActiveTextCollector.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ChatComponent$AlphaCalculator } from '../../../../../net/minecraft/client/gui/components/ChatComponent$AlphaCalculator.d.ts'
import type { ChatComponent$ChatGraphicsAccess } from '../../../../../net/minecraft/client/gui/components/ChatComponent$ChatGraphicsAccess.d.ts'
import type { ChatComponent$ChatMethod } from '../../../../../net/minecraft/client/gui/components/ChatComponent$ChatMethod.d.ts'
import type { ChatComponent$DelayedMessageDeletion } from '../../../../../net/minecraft/client/gui/components/ChatComponent$DelayedMessageDeletion.d.ts'
import type { ChatComponent$DisplayMode } from '../../../../../net/minecraft/client/gui/components/ChatComponent$DisplayMode.d.ts'
import type { ChatComponent$Draft } from '../../../../../net/minecraft/client/gui/components/ChatComponent$Draft.d.ts'
import type { ChatComponent$LineConsumer } from '../../../../../net/minecraft/client/gui/components/ChatComponent$LineConsumer.d.ts'
import type { ChatComponent$State } from '../../../../../net/minecraft/client/gui/components/ChatComponent$State.d.ts'
import type { ChatScreen } from '../../../../../net/minecraft/client/gui/screens/ChatScreen.d.ts'
import type { ChatScreen$ChatConstructor } from '../../../../../net/minecraft/client/gui/screens/ChatScreen$ChatConstructor.d.ts'
import type { GuiMessage } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessage.d.ts'
import type { GuiMessage$Line } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessage$Line.d.ts'
import type { GuiMessageSource } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessageSource.d.ts'
import type { GuiMessageTag } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessageTag.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MessageSignature } from '../../../../../net/minecraft/network/chat/MessageSignature.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ChatComponent extends Object implements MixinChatComponentAccessor, ChatComponentAddition {
    static GO_TO_RESTRICTIONS_SCREEN: Identifier;
    static MESSAGE_BOTTOM_TO_MESSAGE_TOP: number;
    static QUEUE_EXPAND_ID: Identifier;
    static defaultUnfocusedPct(): number;
    static getHeight(parampct: number): number;
    static getWidth(parampct: number): number;
    constructor(minecraft: Minecraft)
    allMessages: GuiMessage[];
    readonly chatScrollbarPos: number;
    // private chatY: number;
    // private latestDraft: ChatComponent$Draft;
    // private messageDeletionQueue: ChatComponent$DelayedMessageDeletion[];
    // private minecraft: Minecraft;
    // private newMessageSinceScroll: boolean;
    // private preservedScreen: ChatScreen;
    readonly recentChat: string[];
    trimmedMessages: GuiMessage$Line[];
    readonly visibleMessageFilter: (param0: GuiMessage) => boolean;
    addClientSystemMessage(message: Component): void;
    // private addMessage(contents: Component, signature: MessageSignature, source: GuiMessageSource, tag: GuiMessageTag): void;
    addMessageToDisplayQueue(message: GuiMessage): void;
    addMessageToQueue(message: GuiMessage): void;
    addPlayerMessage(message: Component, signature: MessageSignature, tag: GuiMessageTag): void;
    addRecentChat(message: string): void;
    addServerSystemMessage(message: Component): void;
    captureClickableText(activeTextCollector: ActiveTextCollector, screenHeight: number, ticks: number, displayMode: ChatComponent$DisplayMode): void;
    clearMessages(history: boolean): void;
    createScreen<T extends ChatScreen>(chatMethod: ChatComponent$ChatMethod, chat: (param0: string, param1: boolean) => T): T;
    deleteMessage(signature: MessageSignature): void;
    // private deleteMessageOrDelay(signature: MessageSignature): ChatComponent$DelayedMessageDeletion;
    discardDraft(): void;
    extractRenderState(graphics: GuiGraphicsExtractor, font: Font, ticks: number, mouseX: number, mouseY: number, displayMode: ChatComponent$DisplayMode, changeCursorOnInsertions: boolean): void;
    // private extractRenderState(graphics: ChatComponent$ChatGraphicsAccess, screenHeight: number, ticks: number, displayMode: ChatComponent$DisplayMode): void;
    // private forEachLine(alphaCalculator: (param0: GuiMessage$Line) => number, lineConsumer: (param0: GuiMessage$Line, param1: number, param2: number) => void): number;
    getChatScrollbarPos(): number;
    // private getHeight(): number;
    // private getLineHeight(): number;
    getLinesPerPage(): number;
    getRecentChat(): string[];
    // private getScale(): number;
    // private getWidth(): number;
    invokeGetLineHeight(): number;
    invokeGetLinesPerPage(): number;
    invokeGetScale(): number;
    invokeGetWidth(): number;
    isChatFocused(): boolean;
    liquidbounce_getChatY(): number;
    logChatMessage(message: GuiMessage): void;
    openScreen(chatMethod: ChatComponent$ChatMethod, chat: (param0: string, param1: boolean) => ChatScreen | null): void;
    preserveCurrentChatScreen(): void;
    // private processMessageDeletionQueue(): void;
    // private refreshTrimmedMessages(): void;
    rescaleChat(): void;
    resetChatScroll(): void;
    restoreChatScreen(): ChatScreen;
    restoreState(state: ChatComponent$State): void;
    saveAsDraft(text: string): void;
    scrollChat(dir: number): void;
    setVisibleMessageFilter(visibleMessageFilter: (param0: GuiMessage) => boolean): void;
    storeState(): ChatComponent$State;
    tick(): void;
}