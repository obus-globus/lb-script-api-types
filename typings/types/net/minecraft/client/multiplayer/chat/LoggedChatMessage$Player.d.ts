import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChatTrustLevel } from '../../../../../net/minecraft/client/multiplayer/chat/ChatTrustLevel.d.ts'
import type { LoggedChatEvent$Type } from '../../../../../net/minecraft/client/multiplayer/chat/LoggedChatEvent$Type.d.ts'
import type { LoggedChatMessage } from '../../../../../net/minecraft/client/multiplayer/chat/LoggedChatMessage.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PlayerChatMessage } from '../../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
export class LoggedChatMessage$Player extends Record implements LoggedChatMessage {
    static CODEC: MapCodec<LoggedChatMessage$Player>;
    constructor(profile: GameProfile, message: PlayerChatMessage, trustLevel: ChatTrustLevel)
    // private message: PlayerChatMessage;
    // private profile: GameProfile;
    // private trustLevel: ChatTrustLevel;
    canReport(reportedPlayerId: UUID): boolean;
    equals(o: Object | null): boolean;
    // private getTimeComponent(): Component;
    hashCode(): number;
    message(): PlayerChatMessage;
    profile(): GameProfile;
    profileId(): UUID;
    toContentComponent(): Component;
    toHeadingComponent(): Component;
    toNarrationComponent(): Component;
    toString(): string;
    trustLevel(): ChatTrustLevel;
    type(): LoggedChatEvent$Type;
}