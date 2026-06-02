import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClockState extends Record {
    static CODEC: Codec<ClockState>;
    // private partialTick: number;
    // private paused: boolean;
    // private rate: number;
    // private totalTicks: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    partialTick(): number;
    paused(): boolean;
    rate(): number;
    toString(): string;
    totalTicks(): number;
}