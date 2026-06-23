import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WeightedPicker$WeightedEntry } from '../../../../../net/fabricmc/fabric/impl/biome/WeightedPicker$WeightedEntry.d.ts'
import type { ImprovedNoise } from '../../../../../net/minecraft/world/level/levelgen/synth/ImprovedNoise.d.ts'
export class WeightedPicker<T extends unknown> extends Object {
    constructor()
    private constructor(arg0: number, arg1: WeightedPicker$WeightedEntry<T>[])
    // private currentTotal: number;
    // private entries: WeightedPicker$WeightedEntry<T>[];
    add(arg0: T, arg1: number): void;
    getCurrentWeightTotal(): number;
    getEntryCount(): number;
    map<U extends unknown>(arg0: (param0: T) => U): WeightedPicker<U>;
    pickFromNoise(arg0: ImprovedNoise, arg1: number, arg2: number, arg3: number): T;
    search(arg0: number): WeightedPicker$WeightedEntry<T>;
}