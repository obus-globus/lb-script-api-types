import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ClockState } from '../../../../net/minecraft/world/clock/ClockState.d.ts'
import type { WorldClock } from '../../../../net/minecraft/world/clock/WorldClock.d.ts'
export class PackedClockStates extends Record {
    static CODEC: Codec<PackedClockStates>;
    static EMPTY: PackedClockStates;
    constructor(clocks: JavaMap<Holder<WorldClock>, ClockState>)
    // private clocks: JavaMap<Holder<WorldClock>, ClockState>;
    clocks(): JavaMap<Holder<WorldClock>, ClockState>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}