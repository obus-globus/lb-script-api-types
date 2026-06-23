import type { Table } from '../../../../../com/google/common/collect/Table.d.ts'
import type { UnsignedLong } from '../../../../../com/google/common/primitives/UnsignedLong.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { SavedData } from '../../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
import type { TimerCallback } from '../../../../../net/minecraft/world/level/timers/TimerCallback.d.ts'
import type { TimerQueue$Event } from '../../../../../net/minecraft/world/level/timers/TimerQueue$Event.d.ts'
import type { TimerQueue$Packed } from '../../../../../net/minecraft/world/level/timers/TimerQueue$Packed.d.ts'
export class TimerQueue<T extends unknown> extends SavedData {
    static CODEC: Codec<TimerQueue<MinecraftServer>>;
    static TYPE: SavedDataType<TimerQueue<MinecraftServer>>;
    constructor()
    constructor(packedEvents: TimerQueue$Packed<T>)
    // private events: Table<string, number, TimerQueue$Event<T>>;
    // private queue: TimerQueue$Event<T>[];
    // private sequentialId: UnsignedLong;
    getEventsIds(): string[];
    pack(): TimerQueue$Packed<T>;
    remove(id: string): number;
    schedule(id: string, time: number, callback: TimerCallback<T>): void;
    tick(context: T, currentTick: number): void;
}