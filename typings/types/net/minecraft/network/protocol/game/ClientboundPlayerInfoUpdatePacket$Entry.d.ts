import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RemoteChatSession$Data } from '../../../../../net/minecraft/network/chat/RemoteChatSession$Data.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
export class ClientboundPlayerInfoUpdatePacket$Entry extends Record {
    constructor(profileId: UUID, profile: GameProfile, listed: boolean, latency: number, gameMode: GameType, displayName: Component, showHat: boolean, listOrder: number, chatSession: RemoteChatSession$Data)
    // private chatSession: RemoteChatSession$Data;
    // private displayName: Component;
    // private gameMode: GameType;
    // private latency: number;
    // private listOrder: number;
    // private listed: boolean;
    // private profile: GameProfile;
    // private profileId: UUID;
    // private showHat: boolean;
    chatSession(): RemoteChatSession$Data;
    displayName(): Component;
    equals(o: Object | null): boolean;
    gameMode(): GameType;
    hashCode(): number;
    latency(): number;
    listOrder(): number;
    listed(): boolean;
    profile(): GameProfile;
    profileId(): UUID;
    showHat(): boolean;
    toString(): string;
}