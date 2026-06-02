import type { GuardedSerializer } from '../../../../com/mojang/realmsclient/dto/GuardedSerializer.d.ts'
import type { PlayerInfo } from '../../../../com/mojang/realmsclient/dto/PlayerInfo.d.ts'
import type { RealmsServer$Compatibility } from '../../../../com/mojang/realmsclient/dto/RealmsServer$Compatibility.d.ts'
import type { RealmsServer$State } from '../../../../com/mojang/realmsclient/dto/RealmsServer$State.d.ts'
import type { RealmsServer$WorldType } from '../../../../com/mojang/realmsclient/dto/RealmsServer$WorldType.d.ts'
import type { RealmsSlot } from '../../../../com/mojang/realmsclient/dto/RealmsSlot.d.ts'
import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { RegionSelectionPreferenceDto } from '../../../../com/mojang/realmsclient/dto/RegionSelectionPreferenceDto.d.ts'
import type { ValueObject } from '../../../../com/mojang/realmsclient/dto/ValueObject.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerData } from '../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsServer extends ValueObject implements ReflectionBasedSerialization {
    static WORLD_CLOSED_COMPONENT: Component;
    static finalize(paramserver: RealmsServer): void;
    static parse(paramgson: GuardedSerializer, paramjson: string): RealmsServer;
    constructor()
    activeSlot: number;
    activeVersion: string;
    compatibility: RealmsServer$Compatibility;
    daysLeft: number;
    expired: boolean;
    expiredTrial: boolean;
    gameMode: number;
    id: number;
    isHardcore: boolean;
    minigameId: number;
    minigameImage: string;
    minigameName: string;
    motd: string;
    name: string;
    owner: string;
    ownerUUID: UUID;
    parentRealmId: number;
    parentWorldName: string;
    players: PlayerInfo[];
    regionSelectionPreference: RegionSelectionPreferenceDto;
    remoteSubscriptionId: string;
    // private slotList: RealmsSlot[];
    slots: { [key: number]: RealmsSlot };
    state: RealmsServer$State;
    worldType: RealmsServer$WorldType;
    cloneSlots(slots: { [key: number]: RealmsSlot }): { [key: number]: RealmsSlot };
    copy(): RealmsServer;
    equals(obj: Object | null): boolean;
    getDescription(): string;
    getMinigameName(): string;
    getName(): string;
    getWorldName(slotId: number): string;
    hashCode(): number;
    isCompatible(): boolean;
    isMinigameActive(): boolean;
    // private isSelfOwnedServer(): boolean;
    isSnapshotRealm(): boolean;
    needsDowngrade(): boolean;
    needsUpgrade(): boolean;
    setDescription(motd: string): void;
    setName(name: string): void;
    shouldPlayButtonBeActive(): boolean;
    toServerData(ip: string): ServerData;
}