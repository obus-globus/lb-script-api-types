import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TimerCallback } from '../../../../../net/minecraft/world/level/timers/TimerCallback.d.ts'
import type { TimerQueue$Event$Packed } from '../../../../../net/minecraft/world/level/timers/TimerQueue$Event$Packed.d.ts'
export class TimerQueue$Packed<T extends unknown> extends Record {
    static codec<T extends unknown>(paramcallbackCodec: Codec<TimerCallback<T>>): Codec<TimerQueue$Packed<T>>;
    constructor(events: TimerQueue$Event$Packed<T>[])
    // private events: TimerQueue$Event$Packed<T>[];
    equals(o: Object | null): boolean;
    events(): TimerQueue$Event$Packed<T>[];
    hashCode(): number;
    toString(): string;
}