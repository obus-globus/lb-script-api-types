import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { CustomBossEvent$Packed } from '../../../../net/minecraft/server/bossevents/CustomBossEvent$Packed.d.ts'
import type { ServerBossEvent } from '../../../../net/minecraft/server/level/ServerBossEvent.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class CustomBossEvent extends ServerBossEvent {
    static load(paramid: UUID, paramcustomId: Identifier, parampacked: CustomBossEvent$Packed, paramsetDirty: () => void): CustomBossEvent;
    constructor(id: UUID, customId: Identifier, name: Component, dirtyCallback: () => void)
    // private customId: Identifier;
    // private dirtyCallback: () => void;
    readonly max: number;
    readonly players: UUID[];
    readonly value: number;
    addPlayer(player: ServerPlayer): void;
    customId(): Identifier;
    getDisplayName(): Component;
    max(): number;
    onPlayerConnect(player: ServerPlayer): void;
    onPlayerDisconnect(player: ServerPlayer): void;
    pack(): CustomBossEvent$Packed;
    removeAllPlayers(): void;
    removePlayer(player: ServerPlayer): void;
    setDirty(): void;
    setMax(max: number): void;
    setPlayers(players: E[]): boolean;
    setValue(value: number): void;
    value(): number;
}