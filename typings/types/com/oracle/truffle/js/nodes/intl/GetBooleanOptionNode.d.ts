import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToBooleanNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GetBooleanOptionNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramproperty: TruffleString, paramfallback: boolean): GetBooleanOptionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, property: TruffleString, fallback: boolean)
    // private fallback: boolean;
    // private propertyGetNode: PropertyGetNode;
    // private toBooleanNode: JSToBooleanNode;
    executeValue(options: Object): boolean;
    getOption(options: Object): boolean;
    toOptionType(propertyValue: Object): boolean;
}