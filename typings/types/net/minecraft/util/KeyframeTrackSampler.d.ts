import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KeyframeTrack } from '../../../net/minecraft/util/KeyframeTrack.d.ts'
import type { KeyframeTrackSampler$Segment } from '../../../net/minecraft/util/KeyframeTrackSampler$Segment.d.ts'
import type { LerpFunction } from '../../../net/minecraft/world/attribute/LerpFunction.d.ts'
export class KeyframeTrackSampler<T extends unknown> extends Object {
    constructor(track: KeyframeTrack<T>, periodTicks: Optional<number>, lerp: LerpFunction<T>)
    // private lerp: LerpFunction<T>;
    // private periodTicks: Optional<number>;
    // private segments: KeyframeTrackSampler$Segment<T>[];
    // private getSegmentAt(currentTicks: number): KeyframeTrackSampler$Segment<T>;
    // private loopTicks(ticks: number): number;
    sample(ticks: number): T;
}