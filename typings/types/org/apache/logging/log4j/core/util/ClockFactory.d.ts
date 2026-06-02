import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Clock } from '../../../../../../org/apache/logging/log4j/core/util/Clock.d.ts'
export class ClockFactory extends Object {
    static PROPERTY_NAME: string;
    static getClock(): Clock;
    private constructor()
}