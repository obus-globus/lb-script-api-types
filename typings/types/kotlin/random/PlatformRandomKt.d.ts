import type { Random } from '../../java/util/Random.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Random as Random_2 } from '../../kotlin/random/Random.d.ts'
export class PlatformRandomKt extends Object {
    static asJavaRandom(self: Random_2): Random;
    static asKotlinRandom(self: Random): Random_2;
    static doubleFromParts(hi26: number, low27: number): number;
}