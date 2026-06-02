import type { Pair } from '../../../../../../../../../kotlin/Pair.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { KeybindIsPressedEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/KeybindIsPressedEvent.d.ts'
import type { SimulatedPlayerCache } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayerCache.d.ts'
import type { Entity } from '../../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class AutoBowAutoShootFeature extends ToggleableValueGroup {
    static INSTANCE: AutoBowAutoShootFeature;
    // private aimThreshold: number;
    // private /*not mapped: */ getAimThreshold(): number;
    // private charged: number;
    // private /*not mapped: */ getCharged(): number;
    // private chargedRandom: ClosedFloatingPointRange<number>;
    // private getChargedRandom(): ClosedFloatingPointRange<number>;
    // private currentChargeRandom: number | null;
    // private delayBetweenShots: number;
    // private /*not mapped: */ getDelayBetweenShots(): number;
    // private forceUncharged: boolean;
    // private keybindHandler: EventHook<KeybindIsPressedEvent>;
    // private requiresHypotheticalHit: boolean;
    // private /*not mapped: */ getRequiresHypotheticalHit(): boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    // private usePrechargedCrossbow: boolean;
    // private /*not mapped: */ getUsePrechargedCrossbow(): boolean;
    // private findAndBuildSimulatedEntities(): Pair<Entity, SimulatedPlayerCache>[];
    // private getChargedRandom(): number;
    // private getHypotheticalHit(): Entity | null;
    onDisabled(): void;
    // private updateChargeRandom(): void;
}