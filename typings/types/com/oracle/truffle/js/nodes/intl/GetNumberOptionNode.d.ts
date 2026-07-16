import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { DefaultNumberOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/DefaultNumberOptionNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GetNumberOptionNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramproperty: TruffleString): GetNumberOptionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, property: TruffleString)
    // private defaultNumberOptionNode: DefaultNumberOptionNode;
    // private propertyGetNode: PropertyGetNode;
    executeInt(options: Object, minimum: number, maximum: number, fallback: number): number;
    getOption(options: Object, minimum: number, maximum: number, fallback: number): number;
}