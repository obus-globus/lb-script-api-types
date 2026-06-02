import type { Clock } from '../../../io/jsonwebtoken/Clock.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultClock extends Object implements Clock {
    static INSTANCE: Clock;
    constructor()
    now(): Date;
}