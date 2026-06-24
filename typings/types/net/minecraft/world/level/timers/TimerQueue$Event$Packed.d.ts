import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TimerCallback } from '../../../../../net/minecraft/world/level/timers/TimerCallback.d.ts'
export class TimerQueue$Event$Packed<T extends unknown> extends Record {
    static codec(paramcallbackCodec: Codec<TimerCallback<Object>>): Codec<TimerQueue$Event$Packed<Object>>;
    constructor(triggerTime: number, id: string, callback: TimerCallback<T>)
    // private callback: TimerCallback<T>;
    // private id: string;
    // private triggerTime: number;
    callback(): TimerCallback<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): string;
    toString(): string;
    triggerTime(): number;
}