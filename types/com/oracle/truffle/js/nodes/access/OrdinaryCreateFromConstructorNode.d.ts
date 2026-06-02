import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateObjectNode$CreateObjectWithPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateObjectNode$CreateObjectWithPrototypeNode.d.ts'
import type { GetPrototypeFromConstructorNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetPrototypeFromConstructorNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { CompilableFunction } from '../../../../../../com/oracle/truffle/js/runtime/util/CompilableFunction.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class OrdinaryCreateFromConstructorNode extends JavaScriptNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, paramconstructorNode: JavaScriptNode, paramintrinsicDefaultProto: (param0: JSRealm) => JSDynamicObject, paramjsclass: JSClass): OrdinaryCreateFromConstructorNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(getPrototypeFromConstructorNode: GetPrototypeFromConstructorNode, createObjectNode: CreateObjectNode$CreateObjectWithPrototypeNode)
    constructor(context: JSContext, constructorNode: JavaScriptNode, intrinsicDefaultProto: (param0: JSRealm) => JSDynamicObject, jsclass: JSClass)
    // private createObjectNode: CreateObjectNode$CreateObjectWithPrototypeNode;
    // private getPrototypeFromConstructorNode: GetPrototypeFromConstructorNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): JSObject;
    executeWithConstructor(constructor: JSDynamicObject): JSObject;
    // private executeWithPrototype(proto: JSDynamicObject): JSObject;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
}