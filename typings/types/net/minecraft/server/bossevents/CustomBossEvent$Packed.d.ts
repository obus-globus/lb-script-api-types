import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { BossEvent$BossBarColor } from '../../../../net/minecraft/world/BossEvent$BossBarColor.d.ts'
import type { BossEvent$BossBarOverlay } from '../../../../net/minecraft/world/BossEvent$BossBarOverlay.d.ts'
export class CustomBossEvent$Packed extends Record {
    static CODEC: Codec<CustomBossEvent$Packed>;
    constructor(name: Component, visible: boolean, value: number, max: number, color: BossEvent$BossBarColor, overlay: BossEvent$BossBarOverlay, darkenScreen: boolean, playBossMusic: boolean, createWorldFog: boolean, players: UUID[])
    // private color: BossEvent$BossBarColor;
    // private createWorldFog: boolean;
    // private darkenScreen: boolean;
    // private max: number;
    // private name: Component;
    // private overlay: BossEvent$BossBarOverlay;
    // private playBossMusic: boolean;
    // private players: UUID[];
    // private value: number;
    // private visible: boolean;
    color(): BossEvent$BossBarColor;
    createWorldFog(): boolean;
    darkenScreen(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    max(): number;
    name(): Component;
    overlay(): BossEvent$BossBarOverlay;
    playBossMusic(): boolean;
    players(): UUID[];
    toString(): string;
    value(): number;
    visible(): boolean;
}