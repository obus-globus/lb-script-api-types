import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { CoerceOptionsToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/CoerceOptionsToObjectNode.d.ts'
import type { GetBooleanOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetBooleanOptionNode.d.ts'
import type { GetNumberOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetNumberOptionNode.d.ts'
import type { GetStringOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetStringOptionNode.d.ts'
import type { InitializeDateTimeFormatNode$Defaults } from '../../../../../../com/oracle/truffle/js/nodes/intl/InitializeDateTimeFormatNode$Defaults.d.ts'
import type { InitializeDateTimeFormatNode$Required } from '../../../../../../com/oracle/truffle/js/nodes/intl/InitializeDateTimeFormatNode$Required.d.ts'
import type { JSToCanonicalizedLocaleListNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/JSToCanonicalizedLocaleListNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDateTimeFormatObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSDateTimeFormatObject.d.ts'
import type { Pair } from '../../../../../../com/oracle/truffle/js/runtime/util/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TimeZone } from '../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
export abstract class InitializeDateTimeFormatNode extends JavaScriptBaseNode {
    static DATE_TIME_STYLE_OPTION_VALUES: string[];
    static DAY_OPTION_VALUES: string[];
    static FORMAT_MATCHER_OPTION_VALUES: string[];
    static TIME_ZONE_NAME_OPTION_VALUES: string[];
    static TIME_ZONE_NAME_OPTION_VALUES_ES2022: string[];
    static TWO_DIGIT_NUMERIC_OPTION_VALUES: string[];
    static createInitalizeDateTimeFormatNode(paramcontext: JSContext, paramrequired: InitializeDateTimeFormatNode$Required, paramdefaults: InitializeDateTimeFormatNode$Defaults): InitializeDateTimeFormatNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, required: InitializeDateTimeFormatNode$Required, defaults: InitializeDateTimeFormatNode$Defaults)
    // private coerceOptionsToObjectNode: CoerceOptionsToObjectNode;
    // private context: JSContext;
    // private defaults: InitializeDateTimeFormatNode$Defaults;
    // private errorBranch: BranchProfile;
    // private getCalendarOption: GetStringOptionNode;
    // private getDateStyleOption: GetStringOptionNode;
    // private getDayOption: GetStringOptionNode;
    // private getDayPeriodOption: GetStringOptionNode;
    // private getEraOption: GetStringOptionNode;
    // private getFormatMatcherOption: GetStringOptionNode;
    // private getFractionalSecondDigitsOption: GetNumberOptionNode;
    // private getHour12Option: GetBooleanOptionNode;
    // private getHourCycleOption: GetStringOptionNode;
    // private getHourOption: GetStringOptionNode;
    // private getLocaleMatcherOption: GetStringOptionNode;
    // private getMinuteOption: GetStringOptionNode;
    // private getMonthOption: GetStringOptionNode;
    // private getNumberingSystemOption: GetStringOptionNode;
    // private getSecondOption: GetStringOptionNode;
    // private getTimeStyleOption: GetStringOptionNode;
    // private getTimeZoneNameOption: GetStringOptionNode;
    // private getTimeZoneNode: PropertyGetNode;
    // private getWeekdayOption: GetStringOptionNode;
    // private getYearOption: GetStringOptionNode;
    // private required: InitializeDateTimeFormatNode$Required;
    // private toCanonicalizedLocaleListNode: JSToCanonicalizedLocaleListNode;
    // private toJavaStringNode: TruffleString$ToJavaStringNode;
    // private toStringNode: JSToStringNode;
    executeInit(dateTimeFormatObj: JSDateTimeFormatObject, locales: Object, options: Object): JSDateTimeFormatObject;
    initializeDateTimeFormat(dateTimeFormatObj: JSDateTimeFormatObject, localesArg: Object, optionsArg: Object): JSDateTimeFormatObject;
    // private parseAndGetICUTimeZone(name: string): Pair<TimeZone, string>;
    // private toTimeZone(timeZoneValue: Object): Pair<TimeZone, string>;
}