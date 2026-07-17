import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ArraySpeciesCreateNode } from '../../../../../com/oracle/truffle/js/nodes/array/ArraySpeciesCreateNode.d.ts'
import type { SpeciesConstructorNode } from '../../../../../com/oracle/truffle/js/nodes/array/SpeciesConstructorNode.d.ts'
import type { TypedArrayLengthNode } from '../../../../../com/oracle/truffle/js/nodes/array/TypedArrayLengthNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayPrototypeBuiltins$ArraySpeciesConstructorNode extends JavaScriptBaseNode {
    static create(paramisTypedArrayImplementation: boolean): ArrayPrototypeBuiltins$ArraySpeciesConstructorNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(isTypedArrayImplementation: boolean)
    // private arraySpeciesCreate: ArraySpeciesCreateNode;
    // private constructorCall: JSFunctionCallNode;
    // private errorBranch: BranchProfile;
    // private isTypedArrayImplementation: boolean;
    // private speciesConstructor: SpeciesConstructorNode;
    // private typedArrayLengthNode: TypedArrayLengthNode;
    arraySpeciesCreate(originalArray: Object, length: number): Object;
    construct(constructor: Object, ...userArgs: Object[]): Object;
    createEmptyContainer(thisObj: Object, size: number): Object;
    createEmptyContainer(thisObj: Object, size: number, writeAccessMode: boolean): Object;
    speciesConstructor(thisObj: JSDynamicObject, defaultConstructor: JSFunctionObject): Object;
    typedArrayCreate(constructor: Object, ...args: Object[]): JSTypedArrayObject;
    typedArrayCreate(constructor: Object, length: number): JSTypedArrayObject;
    // private typedArrayCreateImpl(writeAccessMode: boolean, constructor: Object, ...args: Object[]): JSTypedArrayObject;
    typedArrayCreateInWriteMode(constructor: Object, ...args: Object[]): JSTypedArrayObject;
    typedArrayCreateSameType(thisObj: JSTypedArrayObject, ...args: Object[]): JSTypedArrayObject;
    typedArraySpeciesCreate(thisObj: JSTypedArrayObject, ...args: Object[]): JSTypedArrayObject;
    // private typedArraySpeciesCreateImpl(writeAccessMode: boolean, thisObj: JSTypedArrayObject, ...args: Object[]): JSTypedArrayObject;
    typedArraySpeciesCreateInWriteMode(thisObj: JSTypedArrayObject, ...args: Object[]): JSTypedArrayObject;
}