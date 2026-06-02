import type { Clock } from '../../../io/jsonwebtoken/Clock.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class FixedClock extends Object implements Clock {
    constructor()
    constructor(arg0: Date)
    constructor(arg0: number)
    // private now: Date;
    now(): Date;
}