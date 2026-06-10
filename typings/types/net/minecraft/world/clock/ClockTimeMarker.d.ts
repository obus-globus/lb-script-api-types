import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { WorldClock } from '../../../../net/minecraft/world/clock/WorldClock.d.ts'
export class ClockTimeMarker extends Record {
    static KEY_CODEC: Codec<ResourceKey<ClockTimeMarker>>;
    // private clock: Holder<WorldClock>;
    // private periodTicks: Optional<number>;
    // private showInCommands: boolean;
    // private ticks: number;
    clock(): Holder<WorldClock>;
    equals(o: Object | null): boolean;
    getRepetitionCount(totalTicks: number): number;
    hashCode(): number;
    occursAt(totalTicks: number): boolean;
    periodTicks(): Optional<number>;
    resolveTimeToMoveTo(totalTicks: number): number;
    showInCommands(): boolean;
    ticks(): number;
    toString(): string;
}