import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { InitializeDateTimeFormatNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/InitializeDateTimeFormatNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDateTimeFormat$Defaults } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSDateTimeFormat$Defaults.d.ts'
import type { JSDateTimeFormat$Required } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSDateTimeFormat$Required.d.ts'
import type { JSDateTimeFormatObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSDateTimeFormatObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InitializeDateTimeFormatNodeGen extends InitializeDateTimeFormatNode {
    static DATE_TIME_STYLE_OPTION_VALUES: string[];
    static DAY_OPTION_VALUES: string[];
    static FORMAT_MATCHER_OPTION_VALUES: string[];
    static TIME_ZONE_NAME_OPTION_VALUES: string[];
    static TIME_ZONE_NAME_OPTION_VALUES_ES2022: string[];
    static TWO_DIGIT_NUMERIC_OPTION_VALUES: string[];
    static create(paramcontext: JSContext, paramrequired: JSDateTimeFormat$Required, paramdefaults: JSDateTimeFormat$Defaults): InitializeDateTimeFormatNode;
    static createAnyAll(paramcontext: JSContext): InitializeDateTimeFormatNode;
    static createAnyDate(paramcontext: JSContext): InitializeDateTimeFormatNode;
    static createDateDate(paramcontext: JSContext): InitializeDateTimeFormatNode;
    static createInitalizeDateTimeFormatNode(paramcontext: JSContext, paramrequired: JSDateTimeFormat$Required, paramdefaults: JSDateTimeFormat$Defaults): InitializeDateTimeFormatNode;
    static createTimeTime(paramcontext: JSContext): InitializeDateTimeFormatNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, required: JSDateTimeFormat$Required, defaults: JSDateTimeFormat$Defaults)
    executeInit(arg0Value: JSDateTimeFormatObject, arg1Value: Object, arg2Value: Object, arg3Value: TruffleString): JSDateTimeFormatObject;
}