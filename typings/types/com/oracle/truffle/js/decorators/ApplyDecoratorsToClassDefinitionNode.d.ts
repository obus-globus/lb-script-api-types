import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { CreateDecoratorContextObjectNode } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { IsCallableNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { SimpleArrayList } from '../../../../../com/oracle/truffle/js/runtime/util/SimpleArrayList.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ApplyDecoratorsToClassDefinitionNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): ApplyDecoratorsToClassDefinitionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private callNode: JSFunctionCallNode;
    // private createDecoratorContextObject: CreateDecoratorContextObjectNode;
    // private errorProfile: BranchProfile;
    // private isCallableNode: IsCallableNode;
    executeDecorators(className: Object, constructor: JSObject, decorators: Object[], extraInitializers: SimpleArrayList<Object>): Object;
}