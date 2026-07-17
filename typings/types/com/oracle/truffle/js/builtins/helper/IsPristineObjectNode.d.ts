import type { Assumption } from '../../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { GetPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetPrototypeNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class IsPristineObjectNode extends JavaScriptBaseNode {
    static create(paramjsClass: JSClass, paraminitialPrototypeShape: Shape, ...parampropertyKeys: Object[]): IsPristineObjectNode;
    static createRegExpExec(paramcontext: JSContext): IsPristineObjectNode;
    static createRegExpExecAndFlagGetter(paramcontext: JSContext, ...paramextraPropertyKeys: Object[]): IsPristineObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(jsClass: JSClass, initialPrototypeShape: Shape, ...propertyKeys: Object[])
    // private getPrototypeNode: GetPrototypeNode;
    // private initialPrototypeShape: Shape;
    // private jsClass: JSClass;
    // private propertyFinalAssumptions: Assumption[];
    // private propertyKeys: Object[];
    doAssumptionsInvalid(object: JSDynamicObject): boolean;
    doCached(object: JSDynamicObject, cachedShape: Shape, isInstanceAndDoesNotOverwriteProps: boolean): boolean;
    doDynamic(object: JSDynamicObject): boolean;
    execute(object: JSDynamicObject): boolean;
    getPropertyFinalAssumptions(): Assumption[];
    isInstanceAndDoesNotOverwriteProps(objectShape: Shape): boolean;
    // private prototypeShapeUnchanged(object: JSDynamicObject): boolean;
}