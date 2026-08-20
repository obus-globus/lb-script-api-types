import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldRenderEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { WorldParticlesMode$YMotion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/customambience/worldeffects/WorldParticlesMode$YMotion.d.ts'
import type { Easing } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/math/Easing.d.ts'
export abstract class WorldParticlesMode extends Mode {
    static Companion: Tagged$Companion;
    constructor(name: string)
    // private animCurve: Easing;
    // private /*not mapped: */ getAnimCurve(): Easing;
    // private canBeCovered: boolean;
    // private /*not mapped: */ getCanBeCovered(): boolean;
    // private count: number;
    // private /*not mapped: */ getCount(): number;
    // private lastSpawnTime: number;
    // private /*not mapped: */ getLastSpawnTime(): number;
    // private lifetime: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getLifetime(): { start: number; endInclusive: number; step: number };
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    // private radius: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getRadius(): { start: number; endInclusive: number; step: number };
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private size: number;
    // private /*not mapped: */ getSize(): number;
    // private spawnTime: number;
    // private /*not mapped: */ getSpawnTime(): number;
    // private yMotion: WorldParticlesMode$YMotion;
    protected createParticleCoord(currentTime: number): void;
}