import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChatTrustLevel } from '../../../../../net/minecraft/client/multiplayer/chat/ChatTrustLevel.d.ts'
import type { LoggedChatEvent } from '../../../../../net/minecraft/client/multiplayer/chat/LoggedChatEvent.d.ts'
import type { LoggedChatEvent$Type } from '../../../../../net/minecraft/client/multiplayer/chat/LoggedChatEvent$Type.d.ts'
import type { LoggedChatMessage } from '../../../../../net/minecraft/client/multiplayer/chat/LoggedChatMessage.d.ts'
import type { LoggedChatMessage$Player } from '../../../../../net/minecraft/client/multiplayer/chat/LoggedChatMessage$Player.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PlayerChatMessage } from '../../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
export class LoggedChatMessage$System extends Record implements LoggedChatMessage {
    static CODEC: Codec<LoggedChatEvent>;
    static CODEC: MapCodec<LoggedChatMessage$System>;
    static player(paramprofile: GameProfile, parammessage: PlayerChatMessage, paramtrustLevel: ChatTrustLevel): LoggedChatMessage$Player;
    static system(parammessage: Component, paramtimeStamp: Instant): LoggedChatMessage$System;
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