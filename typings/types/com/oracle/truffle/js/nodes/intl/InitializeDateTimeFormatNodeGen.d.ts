import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InitializeDateTimeFormatNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/InitializeDateTimeFormatNode.d.ts'
import type { InitializeDateTimeFormatNode$Defaults } from '../../../../../../com/oracle/truffle/js/nodes/intl/InitializeDateTimeFormatNode$Defaults.d.ts'
import type { InitializeDateTimeFormatNode$Required } from '../../../../../../com/oracle/truffle/js/nodes/intl/InitializeDateTimeFormatNode$Required.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDateTimeFormatObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSDateTimeFormatObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InitializeDateTimeFormatNodeGen extends InitializeDateTimeFormatNode {
    static DATE_TIME_STYLE_OPTION_VALUES: string[];
    static DAY_OPTION_VALUES: string[];
    static FORMAT_MATCHER_OPTION_VALUES: string[];
    static TIME_ZONE_NAME_OPTION_VALUES: string[];
    static TIME_ZONE_NAME_OPTION_VALUES_ES2022: string[];
    static TWO_DIGIT_NUMERIC_OPTION_VALUES: string[];
    static create(paramcontext: JSContext, paramrequired: InitializeDateTimeFormatNode$Required, paramdefaults: InitializeDateTimeFormatNode$Defaults): InitializeDateTimeFormatNode;
    static createInitalizeDateTimeFormatNode(paramcontext: JSContext, paramrequired: InitializeDateTimeFormatNode$Required, paramdefaults: InitializeDateTimeFormatNode$Defaults): InitializeDateTimeFormatNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, required: InitializeDateTimeFormatNode$Required, defaults: InitializeDateTimeFormatNode$Defaults)
    executeInit(arg0Value: JSDateTimeFormatObject, arg1Value: Object, arg2Value: Object): JSDateTimeFormatObject;
}