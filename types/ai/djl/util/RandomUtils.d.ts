import type { Random } from '../../../java/util/Random.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RandomUtils extends Object {
    static RANDOM: Random;
    static nextFloat(): number;
    static nextFloat(paramarg0: number, paramarg1: number): number;
    static nextGaussian(): number;
    static nextInt(): number;
    static nextInt(paramarg0: number): number;
    static random(): number;
    private constructor()
}