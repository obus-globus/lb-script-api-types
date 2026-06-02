import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { ConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { ArrayCreateNode } from '../../../../../com/oracle/truffle/js/nodes/array/ArrayCreateNode.d.ts'
import type { TypedArrayLengthNode } from '../../../../../com/oracle/truffle/js/nodes/array/TypedArrayLengthNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { IsConstructorNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsConstructorNode.d.ts'
import type { JSIsArrayNode } from '../../../../../com/oracle/truffle/js/nodes/unary/JSIsArrayNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayPrototypeBuiltins$ArraySpeciesConstructorNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramisTypedArrayImplementation: boolean): ArrayPrototypeBuiltins$ArraySpeciesConstructorNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, isTypedArrayImplementation: boolean)
    // private arrayCreateNode: ArrayCreateNode;
    // private arraySpeciesEmpty: ConditionProfile;
    // private arraySpeciesGetSymbol: BranchProfile;
    // private arraySpeciesIsArray: BranchProfile;
    // private constructorCall: JSFunctionCallNode;
    // private context: JSContext;
    // private defaultConstructorBranch: BranchProfile;
    // private differentRealm: BranchProfile;
    // private errorBranch: BranchProfile;
    // private getConstructorNode: PropertyGetNode;
    // private getSpeciesNode: PropertyGetNode;
    // private isArrayNode: JSIsArrayNode;
    // private isConstructorNode: IsConstructorNode;
    // private isTypedArrayImplementation: boolean;
    // private typedArrayLengthNode: TypedArrayLengthNode;
    // private arrayCreate(length: number): JSArrayObject;
    arraySpeciesCreate(originalArray: Object, length: number): Object;
    construct(constructor: Object, userArgs: Object[]): Object;
    createEmptyContainer(thisObj: Object, size: number): Object;
    // private getConstructorProperty(obj: Object): Object;
    // private getSpeciesProperty(obj: Object): Object;
    isArray(thisObj: Object): boolean;
    speciesConstructor(thisObj: JSDynamicObject, defaultConstructor: JSDynamicObject): Object;
    typedArrayCreate(constructor: Object, args: Object[]): JSTypedArrayObject;
    typedArrayCreate(constructor: Object, length: number): JSTypedArrayObject;
    typedArrayCreateSameType(thisObj: JSTypedArrayObject, args: Object[]): JSTypedArrayObject;
    typedArraySpeciesCreate(thisObj: JSTypedArrayObject, args: Object[]): JSTypedArrayObject;
}