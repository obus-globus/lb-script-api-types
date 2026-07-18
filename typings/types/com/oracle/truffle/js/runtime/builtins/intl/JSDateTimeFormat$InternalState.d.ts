import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DateFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormat.d.ts'
import type { DateIntervalFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateIntervalFormat.d.ts'
export class JSDateTimeFormat$InternalState extends Object {
    constructor()
    readonly boundFormatFunction: JSDynamicObject;
    // private calendar: string;
    // private dateFormat: DateFormat;
    // private dateIntervalFormat: DateIntervalFormat;
    // private dateStyle: string;
    // private day: string;
    // private dayPeriod: string;
    // private era: string;
    // private fractionalSecondDigits: number;
    // private hour: string;
    // private hourCycle: string;
    readonly initialized: boolean;
    // private locale: string;
    // private minute: string;
    // private month: string;
    // private numberingSystem: string;
    // private second: string;
    // private timeStyle: string;
    // private timeZone: string;
    // private timeZoneName: string;
    // private weekday: string;
    // private year: string;
    getBoundFormatFunction(): JSDynamicObject;
    isInitialized(): boolean;
    setBoundFormatFunction(boundFormatFunction: JSDynamicObject): void;
    toResolvedOptionsObject(context: JSContext, realm: JSRealm): JSObject;
}