import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { AbstractInternalState } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/AbstractInternalState.d.ts'
import type { JSObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Pair } from '../../../../../../../com/oracle/truffle/js/runtime/util/Pair.d.ts'
export class JSDurationFormat$InternalState extends AbstractInternalState {
    constructor()
    // private daysDisplay: string;
    // private daysStyle: string;
    readonly fractionalDigits: number;
    // private hoursDisplay: string;
    // private hoursStyle: string;
    // private microsecondsDisplay: string;
    // private microsecondsStyle: string;
    // private millisecondsDisplay: string;
    // private millisecondsStyle: string;
    // private minutesDisplay: string;
    // private minutesStyle: string;
    // private monthsDisplay: string;
    // private monthsStyle: string;
    // private nanosecondsDisplay: string;
    // private nanosecondsStyle: string;
    // private secondsDisplay: string;
    // private secondsStyle: string;
    readonly style: string;
    // private weeksDisplay: string;
    // private weeksStyle: string;
    // private yearsDisplay: string;
    // private yearsStyle: string;
    setDaysOptions(options: Pair<string, string>): void;
    setFractionalDigits(fractionalDigits: number): void;
    setHoursOptions(options: Pair<string, string>): void;
    setMicrosecondsOptions(options: Pair<string, string>): void;
    setMillisecondsOptions(options: Pair<string, string>): void;
    setMinutesOptions(options: Pair<string, string>): void;
    setMonthsOptions(options: Pair<string, string>): void;
    setNanosecondsOptions(options: Pair<string, string>): void;
    setSecondsOptions(options: Pair<string, string>): void;
    setStyle(style: string): void;
    setWeeksOptions(options: Pair<string, string>): void;
    setYearsOptions(options: Pair<string, string>): void;
    toResolvedOptions(context: JSContext, realm: JSRealm): JSObject;
}