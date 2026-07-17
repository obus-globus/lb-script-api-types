import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSOverloadedOperatorsObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSOverloadedOperatorsObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { OperatorSet } from '../../../../../com/oracle/truffle/js/runtime/objects/OperatorSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class OperatorsBuiltins$CreateOverloadedOperatorsObjectNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): OperatorsBuiltins$CreateOverloadedOperatorsObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    createDefaultProto(prototype: Object, operatorSet: OperatorSet, cachedShape: Shape): JSOverloadedOperatorsObject;
    createWithProto(prototype: JSObject, operatorSet: OperatorSet, setProtoNode: DynamicObject$PutNode, cachedShape: Shape): JSOverloadedOperatorsObject;
    doCachedProto(prototype: Object, operatorSet: OperatorSet, cachedPrototype: Object, cachedShape: Shape): JSOverloadedOperatorsObject;
    execute(prototype: Object, operatorSet: OperatorSet): JSOverloadedOperatorsObject;
    getContext(): JSContext;
    getProtoChildShape(prototype: Object): Shape;
    getShapeWithDefaultProto(realm: JSRealm): Shape;
    getShapeWithoutProto(): Shape;
}