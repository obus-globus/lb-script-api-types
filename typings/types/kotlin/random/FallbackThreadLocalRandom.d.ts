import type { ThreadLocal } from '../../java/lang/ThreadLocal.d.ts'
import type { Random } from '../../java/util/Random.d.ts'
import type { AbstractPlatformRandom } from '../../kotlin/random/AbstractPlatformRandom.d.ts'
import type { Random$Default } from '../../kotlin/random/Random$Default.d.ts'
export class FallbackThreadLocalRandom extends AbstractPlatformRandom {
    static Default: Random$Default;
    constructor()
    readonly impl: Random;
    // private implStorage: ThreadLocal<Random>;
}