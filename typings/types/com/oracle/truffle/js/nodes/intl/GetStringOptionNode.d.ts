import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GetStringOptionNode extends JavaScriptBaseNode {
    static AUTO_ALWAYS_OPTION_VALUES: string[];
    static CASE_FIRST_OPTION_VALUES: string[];
    static HOUR_CYCLE_OPTION_VALUES: string[];
    static LOCALE_MATCHER_OPTION_VALUES: string[];
    static LONG_SHORT_NARROW_DIGITAL_OPTION_VALUES: string[];
    static LONG_SHORT_NARROW_OPTION_VALUES: string[];
    static NARROW_SHORT_LONG_OPTION_VALUES: string[];
    static create(paramcontext: JSContext, paramproperty: TruffleString, paramvalues: string[], paramfallback: string): GetStringOptionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, property: TruffleString, values: string[], fallback: string)
    // private fallback: string;
    // private propertyGetNode: PropertyGetNode;
    // private validValues: string[];
    // private ensureSelectedValueIsValid(value: string): void;
    executeValue(options: Object): string;
    getOption(options: Object, toStringNode: JSToStringNode, toJavaStringNode: TruffleString$ToJavaStringNode): string;
}