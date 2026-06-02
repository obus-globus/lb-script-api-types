import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { LongFunction } from '../../../../../java/util/function/LongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
export class WorldgenRandom$Algorithm extends Enum<WorldgenRandom$Algorithm> {
    static LEGACY: WorldgenRandom$Algorithm;
    static XOROSHIRO: WorldgenRandom$Algorithm;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): WorldgenRandom$Algorithm;
    static values(): (Object | null)[];
    private constructor(constructor: (param0: RandomSource) => unknown)
    // private constructor: (param0: RandomSource) => unknown;
    newInstance(seed: number): RandomSource;
    name(): "LEGACY" | "XOROSHIRO";
}