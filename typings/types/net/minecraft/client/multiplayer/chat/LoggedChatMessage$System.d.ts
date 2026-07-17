import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LoggedChatEvent$Type } from '../../../../../net/minecraft/client/multiplayer/chat/LoggedChatEvent$Type.d.ts'
import type { LoggedChatMessage } from '../../../../../net/minecraft/client/multiplayer/chat/LoggedChatMessage.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class LoggedChatMessage$System extends Record implements LoggedChatMessage {
    static CODEC: MapCodec<LoggedChatMessage$System>;
    constructor(message: Component, timeStamp: Instant)
    // private message: Component;
    // private timeStamp: Instant;
    canReport(reportedPlayerId: UUID): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    message(): Component;
    timeStamp(): Instant;
    toContentComponent(): Component;
    toNarrationComponent(): Component;
    toString(): string;
    type(): LoggedChatEvent$Type;
}