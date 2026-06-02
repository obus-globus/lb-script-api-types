import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { MapCodec } from '../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EasingType } from '../../../net/minecraft/util/EasingType.d.ts'
import type { Keyframe } from '../../../net/minecraft/util/Keyframe.d.ts'
import type { KeyframeTrackSampler } from '../../../net/minecraft/util/KeyframeTrackSampler.d.ts'
import type { LerpFunction } from '../../../net/minecraft/world/attribute/LerpFunction.d.ts'
export class KeyframeTrack<T extends Object | number | string | boolean> extends Record {
    static mapCodec(paramvalueCodec: Codec<Object>): MapCodec<Object>;
    static validatePeriod(paramtrack: KeyframeTrack<Object>, paramperiodTicks: number): DataResult<Object>;
    constructor(keyframes: Keyframe<T>[], easingType: EasingType)
    // private easingType: EasingType;
    // private keyframes: Keyframe<T>[];
    bakeSampler(periodTicks: Optional<number>, lerp: LerpFunction<T>): KeyframeTrackSampler<T>;
    easingType(): EasingType;
    equals(o: Object | null): boolean;
    hashCode(): number;
    keyframes(): Keyframe<T>[];
    toString(): string;
}