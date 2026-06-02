import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundBossEventPacket } from '../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { BossEvent } from '../../../../net/minecraft/world/BossEvent.d.ts'
import type { BossEvent$BossBarColor } from '../../../../net/minecraft/world/BossEvent$BossBarColor.d.ts'
import type { BossEvent$BossBarOverlay } from '../../../../net/minecraft/world/BossEvent$BossBarOverlay.d.ts'
export class ServerBossEvent extends BossEvent {
    constructor(id: UUID, name: Component, color: BossEvent$BossBarColor, overlay: BossEvent$BossBarOverlay)
    readonly players: ServerPlayer[];
    // private unmodifiablePlayers: ServerPlayer[];
    readonly visible: boolean;
    addPlayer(player: ServerPlayer): void;
    // private broadcast(factory: (param0: BossEvent) => ClientboundBossEventPacket): void;
    getPlayers(): E[];
    isVisible(): boolean;
    removeAllPlayers(): void;
    removePlayer(player: ServerPlayer): void;
    setColor(color: BossEvent$BossBarColor): void;
    setCreateWorldFog(createWorldFog: boolean): BossEvent;
    setDarkenScreen(darkenScreen: boolean): BossEvent;
    setDirty(): void;
    setName(name: Component): void;
    setOverlay(overlay: BossEvent$BossBarOverlay): void;
    setPlayBossMusic(playBossMusic: boolean): BossEvent;
    setProgress(progress: number): void;
    setVisible(visible: boolean): void;
}