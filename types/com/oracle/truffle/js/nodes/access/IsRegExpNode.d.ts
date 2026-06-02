import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsJSClassNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSClassNode.d.ts'
import type { IsJSObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToBooleanNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class IsRegExpNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): IsRegExpNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private getSymbolMatchNode: PropertyGetNode;
    doIsObject(obj: JSDynamicObject, isObjectNode: IsJSObjectNode, toBooleanNode: JSToBooleanNode, isJSRegExpNode: IsJSClassNode, hasMatchSymbol: InlinedConditionProfile): boolean;
    doNonObject(obj: Object): boolean;
    executeBoolean(obj: Object): boolean;
}