import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ClockState } from '../../../../net/minecraft/world/clock/ClockState.d.ts'
import type { WorldClock } from '../../../../net/minecraft/world/clock/WorldClock.d.ts'
export class PackedClockStates extends Record {
    static CODEC: Codec<PackedClockStates>;
    static EMPTY: PackedClockStates;
    constructor(clocks: Map<Holder<WorldClock>, ClockState>)
    // private clocks: Map<Holder<WorldClock>, ClockState>;
    clocks(): Map<Holder<WorldClock>, ClockState>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}