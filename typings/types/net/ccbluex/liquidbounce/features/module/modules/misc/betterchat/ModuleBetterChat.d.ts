import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ChatReceiveEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/ChatReceiveEvent.d.ts'
import type { ChatReceiveEvent$ChatType } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/ChatReceiveEvent$ChatType.d.ts'
import type { KeyboardKeyEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/KeyboardKeyEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleBetterChat$Features } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/betterchat/ModuleBetterChat$Features.d.ts'
import type { GuiMessage$Line } from '../../../../../../../../net/minecraft/client/multiplayer/chat/GuiMessage$Line.d.ts'
/**
 * BetterChat Module
 *
 * Quality of life improvements to the in-game chat.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/betterchat/ModuleBetterChat.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/betterchat/ModuleBetterChat.kt:49}
 */
export class ModuleBetterChat extends ClientModule {
    static INSTANCE: ModuleBetterChat;
    /**
     * Resolves the contiguous wrapped-line range for the message at {@link index}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/betterchat/ModuleBetterChat.kt#L221 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/betterchat/ModuleBetterChat.kt:221}
     */
    static resolveMessageBounds(visibleMessages: GuiMessage$Line[], index: number): { start: number; endInclusive: number; step: number };
    antiChatClearPaused: boolean;
    readonly antiClear: boolean;
    // private autoTranslate: ChatReceiveEvent$ChatType[];
    // private /*not mapped: */ getAutoTranslate(): ChatReceiveEvent$ChatType[];
    // private chatReceiveHandler: EventHook<ChatReceiveEvent>;
    // private features: ModuleBetterChat$Features[];
    // private /*not mapped: */ getFeatures(): ModuleBetterChat$Features[];
    // private /*not mapped: */ getForceUnicodeChat(): boolean;
    readonly infiniteLength: boolean;
    // private /*not mapped: */ getKeepAfterDeath(): boolean;
    // private keyboardKeyHandler: EventHook<KeyboardKeyEvent>;
    // private applyUnicodeTransformation(content: string): string;
    modifyMessage(content: string): string;
    resolveMessageBounds(visibleMessages: GuiMessage$Line[], index: number): { start: number; endInclusive: number; step: number };
}