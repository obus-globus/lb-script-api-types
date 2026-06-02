import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TimerQueue } from '../../../../../net/minecraft/world/level/timers/TimerQueue.d.ts'
export interface TimerCallback<T extends Object | number | string | boolean> extends Object{
    codec(): MapCodec<TimerCallback<T>>;
    handle(context: T, queue: TimerQueue<T>, time: number): void;
}