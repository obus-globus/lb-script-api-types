import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { BossEvent } from '../../../../../net/minecraft/world/BossEvent.d.ts'
import type { BossEvent$BossBarColor } from '../../../../../net/minecraft/world/BossEvent$BossBarColor.d.ts'
import type { BossEvent$BossBarOverlay } from '../../../../../net/minecraft/world/BossEvent$BossBarOverlay.d.ts'
export class LerpingBossEvent extends BossEvent {
    constructor(id: UUID, name: Component, progress: number, color: BossEvent$BossBarColor, overlay: BossEvent$BossBarOverlay, darkenScreen: boolean, playMusic: boolean, createWorldFog: boolean)
    // private setTime: number;
    // private targetPercent: number;
    getProgress(): number;
    setProgress(progress: number): void;
}