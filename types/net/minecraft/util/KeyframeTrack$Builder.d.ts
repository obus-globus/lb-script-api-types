import type { ImmutableList$Builder } from '../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EasingType } from '../../../net/minecraft/util/EasingType.d.ts'
import type { Keyframe } from '../../../net/minecraft/util/Keyframe.d.ts'
import type { KeyframeTrack } from '../../../net/minecraft/util/KeyframeTrack.d.ts'
export class KeyframeTrack$Builder<T extends Object | number | string | boolean> extends Object {
    constructor()
    // private easing: EasingType;
    // private keyframes: ImmutableList$Builder<Keyframe<T>>;
    addKeyframe(ticks: number, value: T): KeyframeTrack$Builder<T>;
    build(): KeyframeTrack<T>;
    setEasing(easing: EasingType): KeyframeTrack$Builder<T>;
}