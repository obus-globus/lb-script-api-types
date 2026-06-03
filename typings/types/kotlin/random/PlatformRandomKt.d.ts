import type { Random } from '../../java/util/Random.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Random as Random_2 } from '../../kotlin/random/Random.d.ts'
export class PlatformRandomKt extends Object {
    static asJavaRandom(paramarg0: Random_2): Random;
    static asKotlinRandom(paramarg0: Random): Random_2;
    static doubleFromParts(paramarg0: number, paramarg1: number): number;
}