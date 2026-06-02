import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { BossEvent$BossBarColor } from '../../../../../net/minecraft/world/BossEvent$BossBarColor.d.ts'
import type { BossEvent$BossBarOverlay } from '../../../../../net/minecraft/world/BossEvent$BossBarOverlay.d.ts'
export interface ClientboundBossEventPacket$Handler extends Object{
    add(id: UUID, name: Component, progress: number, color: BossEvent$BossBarColor, overlay: BossEvent$BossBarOverlay, darkenScreen: boolean, playMusic: boolean, createWorldFog: boolean): void;
    remove(id: UUID): void;
    updateName(id: UUID, name: Component): void;
    updateProgress(id: UUID, progress: number): void;
    updateProperties(id: UUID, darkenScreen: boolean, playMusic: boolean, createWorldFog: boolean): void;
    updateStyle(id: UUID, color: BossEvent$BossBarColor, overlay: BossEvent$BossBarOverlay): void;
}