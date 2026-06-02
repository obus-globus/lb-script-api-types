import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { KeyframeTrack } from '../../../../net/minecraft/util/KeyframeTrack.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/attribute/modifier/AttributeModifier.d.ts'
import type { ClockManager } from '../../../../net/minecraft/world/clock/ClockManager.d.ts'
import type { WorldClock } from '../../../../net/minecraft/world/clock/WorldClock.d.ts'
import type { AttributeTrackSampler } from '../../../../net/minecraft/world/timeline/AttributeTrackSampler.d.ts'
export class AttributeTrack<Value extends Object | number | string | boolean, Argument extends Object | number | string | boolean> extends Record {
    static createCodec(paramattribute: EnvironmentAttribute<Object>): Codec<Object>;
    static validatePeriod(paramtrack: AttributeTrack<Object, Object>, paramperiodTicks: number): DataResult<Object>;
    constructor(modifier: AttributeModifier<Value, Argument>, argumentTrack: KeyframeTrack<Argument>)
    // private argumentTrack: KeyframeTrack<Argument>;
    // private modifier: AttributeModifier<Value, Argument>;
    argumentTrack(): KeyframeTrack<Argument>;
    bakeSampler(attribute: EnvironmentAttribute<Value>, clock: Holder<WorldClock>, periodTicks: Optional<number>, clockManager: ClockManager): AttributeTrackSampler<Value, Argument>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modifier(): AttributeModifier<Value, Argument>;
    toString(): string;
}