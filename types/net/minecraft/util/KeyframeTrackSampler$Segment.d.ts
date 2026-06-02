import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EasingType } from '../../../net/minecraft/util/EasingType.d.ts'
export class KeyframeTrackSampler$Segment<T extends Object | number | string | boolean> extends Record {
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