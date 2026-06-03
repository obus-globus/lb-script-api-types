import type { Random } from '../../../java/util/Random.d.ts'
import type { AbstractPlatformRandom } from '../../../kotlin/random/AbstractPlatformRandom.d.ts'
import type { Random$Default } from '../../../kotlin/random/Random$Default.d.ts'
export class PlatformThreadLocalRandom extends AbstractPlatformRandom {
    static Default: Random$Default;
    constructor()
    readonly impl: Random;
    nextDouble(): number;
    nextDouble(until: number): number;
    nextDouble(from: number, until: number): number;
    nextInt(): number;
    nextInt(until: number): number;
    nextInt(from: number, until: number): number;
    nextLong(): number;
    nextLong(until: number): number;
    nextLong(from: number, until: number): number;
}