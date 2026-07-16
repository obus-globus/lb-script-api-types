import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToBooleanNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GetStringOrBooleanOptionNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramproperty: TruffleString, paramvalues: string[], paramtrueValue: Object, paramfalsyValue: Object, paramfallback: Object): GetStringOrBooleanOptionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, property: TruffleString, values: string[], trueValue: Object, falsyValue: Object, fallback: Object)
    // private fallback: Object;
    // private falsyValue: Object;
    // private propertyGetNode: PropertyGetNode;
    // private trueValue: Object;
    // private values: string[];
    // private checkIfAllowed(value: string): void;
    executeValue(options: Object): Object;
    getOption(options: Object, toBooleanNode: JSToBooleanNode, toStringNode: JSToStringNode, toJavaStringNode: TruffleString$ToJavaStringNode): Object;
}