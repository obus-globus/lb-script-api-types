import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EasingType } from '../../../net/minecraft/util/EasingType.d.ts'
import type { Keyframe } from '../../../net/minecraft/util/Keyframe.d.ts'
import type { KeyframeTrack } from '../../../net/minecraft/util/KeyframeTrack.d.ts'
export class KeyframeTrackSampler$Segment<T extends unknown> extends Record {
    constructor(track: KeyframeTrack<T>, from: Keyframe<T>, fromTicks: number, to: Keyframe<T>, toTicks: number)
    // private easing: EasingType;
    // private fromTicks: number;
    // private fromValue: T;
    // private toTicks: number;
    // private toValue: T;
    easing(): EasingType;
    equals(o: Object | null): boolean;
    fromTicks(): number;
    fromValue(): T;
    hashCode(): number;
    toString(): string;
    toTicks(): number;
    toValue(): T;
}