import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { HeightMode } from '../../../../../net/ccbluex/liquidbounce/utils/render/HeightMode.d.ts'
import type { HeightMode$WithGlow } from '../../../../../net/ccbluex/liquidbounce/utils/render/HeightMode$WithGlow.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class HeightMode$Animated extends HeightMode implements HeightMode$WithGlow {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    // private glowOffset: number;
    // private /*not mapped: */ getGlowOffset(): number;
    // private heightMultiplier: number;
    // private /*not mapped: */ getHeightMultiplier(): number;
    // private heightOffset: number;
    // private /*not mapped: */ getHeightOffset(): number;
    readonly parent: ModeValueGroup<Object>;
    // private speed: number;
    // private /*not mapped: */ getSpeed(): number;
    // private calculateHeight(time: number): number;
    getGlowHeight(entity: Entity, partialTicks: number): number;
    getHeight(entity: Entity, partialTicks: number): number;
}