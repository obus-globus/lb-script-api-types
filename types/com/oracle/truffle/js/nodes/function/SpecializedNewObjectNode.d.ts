import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSNonProxy } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSNonProxy.d.ts'
import type { JSObjectFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory.d.ts'
import type { JSOrdinary } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSOrdinary.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class SpecializedNewObjectNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramisBuiltin: boolean, paramisConstructor: boolean, paramisGenerator: boolean, paramisAsyncGenerator: boolean, paraminstanceLayout: JSNonProxy): SpecializedNewObjectNode;
    static create(paramfunctionData: JSFunctionData, paraminstanceLayout: JSOrdinary): SpecializedNewObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, isBuiltin: boolean, isConstructor: boolean, isGenerator: boolean, isAsyncGenerator: boolean, instanceLayout: JSNonProxy)
    // private context: JSContext;
    // private getPrototypeNode: JSTargetableNode;
    // private instanceLayout: JSNonProxy;
    // private isAsyncGenerator: boolean;
    // private isBuiltin: boolean;
    // private isConstructor: boolean;
    // private isGenerator: boolean;
    createDefaultProto(target: JSDynamicObject, prototype: Object): JSDynamicObject;
    createWithProto(target: JSDynamicObject, prototype: JSObject, setProtoNode: DynamicObjectLibrary, cachedShape: Shape): JSDynamicObject;
    createWithProtoCachedClass(target: JSDynamicObject, prototype: Object, setProtoNode: DynamicObjectLibrary, prototypeClass: Class<Object>, cachedShape: Shape): JSDynamicObject;
    doCachedProto(target: JSDynamicObject, prototype: Object, cachedPrototype: Object, factory: JSObjectFactory): JSDynamicObject;
    doUncachedProto(target: JSDynamicObject, prototype: JSObject, slowBranch: InlinedBranchProfile): JSDynamicObject;
    execute(frame: VirtualFrame, newTarget: JSDynamicObject): JSDynamicObject;
    execute(newTarget: JSDynamicObject, prototype: Object): JSDynamicObject;
    getShapeWithoutProto(): Shape;
    makeBoundObjectFactory(prototype: Object): JSObjectFactory;
    throwNotConstructorFunctionTypeError(target: JSDynamicObject, proto: Object): JSDynamicObject;
}