import type { UUID } from '../../../java/util/UUID.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { BossEvent$BossBarColor } from '../../../net/minecraft/world/BossEvent$BossBarColor.d.ts'
import type { BossEvent$BossBarOverlay } from '../../../net/minecraft/world/BossEvent$BossBarOverlay.d.ts'
export abstract class BossEvent extends Object {
    constructor(id: UUID, name: Component, color: BossEvent$BossBarColor, overlay: BossEvent$BossBarOverlay)
    color: BossEvent$BossBarColor;
    // private createWorldFog: boolean;
    // private darkenScreen: boolean;
    readonly id: UUID;
    name: Component;
    overlay: BossEvent$BossBarOverlay;
    // private playBossMusic: boolean;
    progress: number;
    getColor(): BossEvent$BossBarColor;
    getId(): UUID;
    getName(): Component;
    getOverlay(): BossEvent$BossBarOverlay;
    getProgress(): number;
    setColor(color: BossEvent$BossBarColor): void;
    setCreateWorldFog(createWorldFog: boolean): BossEvent;
    setDarkenScreen(darkenScreen: boolean): BossEvent;
    setName(name: Component): void;
    setOverlay(overlay: BossEvent$BossBarOverlay): void;
    setPlayBossMusic(playBossMusic: boolean): BossEvent;
    setProgress(progress: number): void;
    shouldCreateWorldFog(): boolean;
    shouldDarkenScreen(): boolean;
    shouldPlayBossMusic(): boolean;
}