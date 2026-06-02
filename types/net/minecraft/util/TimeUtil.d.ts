import type { Object } from '../../../java/lang/Object.d.ts'
import type { UniformInt } from '../../../net/minecraft/util/valueproviders/UniformInt.d.ts'
export class TimeUtil extends Object {
    static MILLISECONDS_PER_SECOND: number;
    static NANOSECONDS_PER_MILLISECOND: number;
    static NANOSECONDS_PER_SECOND: number;
    static SECONDS_PER_HOUR: number;
    static SECONDS_PER_MINUTE: number;
    static rangeOfSeconds(paramminInclusive: number, parammaxInclusive: number): UniformInt;
    constructor()
}