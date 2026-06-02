import type { IServerData } from '../../../../com/viaversion/viafabricplus/injection/access/core/IServerData.d.ts'
import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerData$ServerPackStatus } from '../../../../net/minecraft/client/multiplayer/ServerData$ServerPackStatus.d.ts'
import type { ServerData$State } from '../../../../net/minecraft/client/multiplayer/ServerData$State.d.ts'
import type { ServerData$Type } from '../../../../net/minecraft/client/multiplayer/ServerData$Type.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ServerStatus$Players } from '../../../../net/minecraft/network/protocol/status/ServerStatus$Players.d.ts'
export class ServerData extends Object implements IServerData {
    static read(paramtag: CompoundTag): ServerData;
    static validateIcon(parambytes: number[]): number[];
    constructor(name: string, ip: string, type: ServerData$Type)
    // private acceptedCodeOfConduct: number;
    readonly iconBytes: number[];
    ip: string;
    motd: Component;
    name: string;
    // private packStatus: ServerData$ServerPackStatus;
    ping: number;
    playerList: Component[];
    players: ServerStatus$Players;
    protocol: number;
    readonly state: ServerData$State;
    status: Component;
    // private type: ServerData$Type;
    version: Component;
    // private viaFabricPlus$forcedVersion: ProtocolVersion;
    // private viaFabricPlus$passedDirectConnectScreen: boolean;
    // private viaFabricPlus$translatingVersion: ProtocolVersion;
    acceptCodeOfConduct(codeOfConduct: string): void;
    clearCodeOfConduct(): void;
    copyFrom(other: ServerData): void;
    copyNameIconFrom(other: ServerData): void;
    getIconBytes(): number[];
    getResourcePackStatus(): ServerData$ServerPackStatus;
    hasAcceptedCodeOfConduct(codeOfConduct: string): boolean;
    isLan(): boolean;
    isRealm(): boolean;
    setIconBytes(iconBytes: number[]): void;
    setResourcePackStatus(packStatus: ServerData$ServerPackStatus): void;
    setState(state: ServerData$State): void;
    state(): ServerData$State;
    type(): ServerData$Type;
    viaFabricPlus$forceVersion(arg0: ProtocolVersion): void;
    viaFabricPlus$forcedVersion(): ProtocolVersion;
    viaFabricPlus$passDirectConnectScreen(arg0: boolean): void;
    viaFabricPlus$passedDirectConnectScreen(): boolean;
    viaFabricPlus$setTranslatingVersion(arg0: ProtocolVersion): void;
    viaFabricPlus$translatingVersion(): ProtocolVersion;
    write(): CompoundTag;
}