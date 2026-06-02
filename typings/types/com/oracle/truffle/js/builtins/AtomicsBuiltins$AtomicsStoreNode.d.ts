import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AtomicsBuiltins$AtomicsOperationNode } from '../../../../../com/oracle/truffle/js/builtins/AtomicsBuiltins$AtomicsOperationNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToBigIntNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToBigIntNode.d.ts'
import type { JSToIndexNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToIndexNode.d.ts'
import type { JSToInt32Node } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { JSToIntegerOrInfinityNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerOrInfinityNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { BigInt } from '../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export abstract class AtomicsBuiltins$AtomicsStoreNode extends AtomicsBuiltins$AtomicsOperationNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static isDirectBigInt64Array(paramta: TypedArray): boolean;
    static isDirectBigUint64Array(paramta: TypedArray): boolean;
    static isDirectInt16Array(paramta: TypedArray): boolean;
    static isDirectInt32Array(paramta: TypedArray): boolean;
    static isDirectInt8Array(paramta: TypedArray): boolean;
    static isDirectUint16Array(paramta: TypedArray): boolean;
    static isDirectUint32Array(paramta: TypedArray): boolean;
    static isDirectUint8Array(paramta: TypedArray): boolean;
    static isInt32SharedBufferView(paramobject: JSTypedArrayObject): boolean;
    static isSharedBufferView(paramobject: JSTypedArrayObject): boolean;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private toBigIntNode: JSToBigIntNode;
    // private toIntNode: JSToInt32Node;
    // private toIntOrInfNode: JSToIntegerOrInfinityNode;
    doGeneric(maybeTarget: Object, index: Object, value: Object, toIndexNode: JSToIndexNode): Object;
    doSharedBigInt64Array(target: JSTypedArrayObject, index: Object, value: Object, ta: TypedArray, toIndexNode: JSToIndexNode): Object;
    doSharedBigUint64Array(target: JSTypedArrayObject, index: Object, value: Object, ta: TypedArray, toIndexNode: JSToIndexNode): Object;
    doSharedInt16Array(target: JSTypedArrayObject, index: number, value: Object, ta: TypedArray): Number;
    doSharedInt16Array(target: JSTypedArrayObject, index: number, value: number, ta: TypedArray): Object;
    doSharedInt32Array(target: JSTypedArrayObject, index: number, value: Object, ta: TypedArray): Object;
    doSharedInt32Array(target: JSTypedArrayObject, index: number, value: number, ta: TypedArray): number;
    doSharedInt32ArrayObjIdx(target: JSTypedArrayObject, index: Object, value: number, ta: TypedArray, toIndexNode: JSToIndexNode): Object;
    doSharedInt8Array(target: JSTypedArrayObject, index: number, value: Object, ta: TypedArray): Number;
    doSharedInt8Array(target: JSTypedArrayObject, index: number, value: number, ta: TypedArray): number;
    doSharedUint16Array(target: JSTypedArrayObject, index: number, value: Object, ta: TypedArray): Number;
    doSharedUint16Array(target: JSTypedArrayObject, index: number, value: number, ta: TypedArray): Object;
    doSharedUint32Array(target: JSTypedArrayObject, index: number, value: Object, ta: TypedArray): Object;
    doSharedUint32Array(target: JSTypedArrayObject, index: number, value: number, ta: TypedArray): number;
    doSharedUint8Array(target: JSTypedArrayObject, index: number, value: Object, ta: TypedArray): Number;
    doSharedUint8Array(target: JSTypedArrayObject, index: number, value: number, ta: TypedArray): number;
    // private toBigIntChecked(v: Object, target: JSTypedArrayObject, index: number): BigInt;
    // private toIntegerOrInfinity(value: Object): Number;
    // private toIntegerOrInfinityChecked(value: Object, target: JSTypedArrayObject, index: number): Number;
    // private toRaw(v: Object): number;
}