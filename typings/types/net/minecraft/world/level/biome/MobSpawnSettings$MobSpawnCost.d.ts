import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MobSpawnSettings$MobSpawnCost extends Record {
    static CODEC: Codec<MobSpawnSettings$MobSpawnCost>;
    constructor(energyBudget: number, charge: number)
    // private charge: number;
    // private energyBudget: number;
    charge(): number;
    energyBudget(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}