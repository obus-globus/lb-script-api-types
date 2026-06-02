import type { Duration } from '../../java/time/Duration.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class EventSettings extends Object {
    constructor()
    toMap(): { [key: string]: string };
    with(arg0: string, arg1: string): EventSettings;
    withPeriod(arg0: Duration): EventSettings;
    withStackTrace(): EventSettings;
    withThreshold(arg0: Duration): EventSettings;
    withoutStackTrace(): EventSettings;
    withoutThreshold(): EventSettings;
}