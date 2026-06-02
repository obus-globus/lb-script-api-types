import type { UnsignedLong } from '../../../../../com/google/common/primitives/UnsignedLong.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TimerCallback } from '../../../../../net/minecraft/world/level/timers/TimerCallback.d.ts'
export class TimerQueue$Event<T extends Object | number | string | boolean> extends Record {
    // private callback: TimerCallback<T>;
    // private id: string;
    // private sequentialId: UnsignedLong;
    // private triggerTime: number;
    callback(): TimerCallback<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): string;
    sequentialId(): UnsignedLong;
    toString(): string;
    triggerTime(): number;
}