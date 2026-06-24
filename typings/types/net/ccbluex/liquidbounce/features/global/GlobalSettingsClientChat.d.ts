import type { ToggleableValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ClientChatJwtTokenEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ClientChatJwtTokenEvent.d.ts'
import type { ClientChatMessageEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ClientChatMessageEvent.d.ts'
import type { ClientChatMessageEvent$ChatGroup } from '../../../../../net/ccbluex/liquidbounce/event/events/ClientChatMessageEvent$ChatGroup.d.ts'
import type { ClientChatStateChange } from '../../../../../net/ccbluex/liquidbounce/event/events/ClientChatStateChange.d.ts'
import type { ClientShutdownEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ClientShutdownEvent.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { SessionEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/SessionEvent.d.ts'
import type { AxochatClient } from '../../../../../net/ccbluex/liquidbounce/features/chat/AxochatClient.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { MessageMetadata } from '../../../../../net/ccbluex/liquidbounce/utils/client/MessageMetadata.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class GlobalSettingsClientChat extends ToggleableValueGroup {
    static INSTANCE: GlobalSettingsClientChat;
    // private autoTranslate: ClientChatMessageEvent$ChatGroup[];
    // private /*not mapped: */ getAutoTranslate(): ClientChatMessageEvent$ChatGroup[];
    // private chatClient: AxochatClient;
    // private exceptionData: MessageMetadata;
    // private handleChatMessage: EventHook<ClientChatMessageEvent>;
    // private handleIncomingJwtToken: EventHook<ClientChatJwtTokenEvent>;
    // private handleStateChange: EventHook<ClientChatStateChange>;
    // private jwtToken: string;
    // private /*not mapped: */ getJwtToken(): string;
    // private messageData: MessageMetadata;
    // private prefix: Component;
    // private repeatable: EventHook<GameTickEvent>;
    /**
     * Overwrites the condition requirement for being in-game
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalSettingsClientChat.kt#L283 | src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalSettingsClientChat.kt:283}
     */
    readonly running: boolean;
    // private sessionChange: EventHook<SessionEvent>;
    // private shutdownHandler: EventHook<ClientShutdownEvent>;
    // private createChatJwtCommand(): Command;
    // private createChatWriteCommand(): Command;
    onDisabled(): void;
    onEnabled(): void;
    // private writeChat(playerPrefix: Component, message: Component): void;
}