import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LoggedChatEvent } from '../../../../../net/minecraft/client/multiplayer/chat/LoggedChatEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export interface LoggedChatMessage extends Object, LoggedChatEvent{
    canReport(reportedPlayerId: UUID): boolean;
    toContentComponent(): Component;
    toNarrationComponent(): Component;
}