import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Random } from '../../java/util/Random.d.ts'
import type { AbstractPlatformRandom } from '../../kotlin/random/AbstractPlatformRandom.d.ts'
import type { Random$Default } from '../../kotlin/random/Random$Default.d.ts'
export class PlatformRandom extends AbstractPlatformRandom implements Serializable {
    static Default: Random$Default;
    constructor(impl: Random)
    readonly impl: Random;
}