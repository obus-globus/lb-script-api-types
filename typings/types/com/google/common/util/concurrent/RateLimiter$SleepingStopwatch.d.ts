import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RateLimiter$SleepingStopwatch extends Object {
    static createFromSystemTimer(): RateLimiter$SleepingStopwatch;
    constructor()
    readMicros(): number;
    sleepMicrosUninterruptibly(micros: number): void;
}