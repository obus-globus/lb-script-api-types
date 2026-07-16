import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { LongFunction } from '../../../../../java/util/function/LongFunction.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
export class WorldgenRandom$Algorithm extends Enum<WorldgenRandom$Algorithm> {
    static LEGACY: WorldgenRandom$Algorithm;
    static XOROSHIRO: WorldgenRandom$Algorithm;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): WorldgenRandom$Algorithm;
    static values(): WorldgenRandom$Algorithm[];
    private constructor(constructor: (param0: number) => RandomSource)
    // private constructor: (param0: number) => RandomSource;
    newInstance(seed: number): RandomSource;
    name(): "LEGACY" | "XOROSHIRO";
}