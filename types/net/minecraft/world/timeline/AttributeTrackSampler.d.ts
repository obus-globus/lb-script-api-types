import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { KeyframeTrack } from '../../../../net/minecraft/util/KeyframeTrack.d.ts'
import type { KeyframeTrackSampler } from '../../../../net/minecraft/util/KeyframeTrackSampler.d.ts'
import type { EnvironmentAttributeLayer$TimeBased } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeLayer$TimeBased.d.ts'
import type { LerpFunction } from '../../../../net/minecraft/world/attribute/LerpFunction.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/attribute/modifier/AttributeModifier.d.ts'
import type { ClockManager } from '../../../../net/minecraft/world/clock/ClockManager.d.ts'
import type { WorldClock } from '../../../../net/minecraft/world/clock/WorldClock.d.ts'
export class AttributeTrackSampler<Value extends Object | number | string | boolean, Argument extends Object | number | string | boolean> extends Object implements EnvironmentAttributeLayer$TimeBased<Value> {
    constructor(clock: Holder<WorldClock>, periodTicks: Optional<number>, modifier: AttributeModifier<Value, Argument>, argumentTrack: KeyframeTrack<Argument>, argumentLerp: LerpFunction<Argument>, clockManager: ClockManager)
    // private argumentSampler: KeyframeTrackSampler<Argument>;
    // private cachedArgument: Argument;
    // private cachedTickId: number;
    // private clock: Holder<WorldClock>;
    // private clockManager: ClockManager;
    // private modifier: AttributeModifier<Value, Argument>;
    applyTimeBased(baseValue: Value, cacheTickId: number): Value;
}