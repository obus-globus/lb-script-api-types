import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { AtomicsBuiltins$AtomicBinaryOperator } from '../../../../../com/oracle/truffle/js/builtins/AtomicsBuiltins$AtomicBinaryOperator.d.ts'
import type { AtomicsBuiltins$AtomicIntBinaryOperator } from '../../../../../com/oracle/truffle/js/builtins/AtomicsBuiltins$AtomicIntBinaryOperator.d.ts'
import type { AtomicsBuiltins$AtomicsOperationNode } from '../../../../../com/oracle/truffle/js/builtins/AtomicsBuiltins$AtomicsOperationNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToBigIntNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToBigIntNode.d.ts'
import type { JSToIndexNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToIndexNode.d.ts'
import type { JSToInt32Node } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { BigInt } from '../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { SafeInteger } from '../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { TypedArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { TypedArray$TypedBigIntArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray$TypedBigIntArray.d.ts'
import type { TypedArray$TypedIntArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray$TypedIntArray.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AtomicsBuiltins$AtomicsComputeNode extends AtomicsBuiltins$AtomicsOperationNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
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
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin, intOperator: (param0: number, param1: number) => number, bigIntOperator: (param0: BigInt, param1: BigInt) => BigInt)
    // private bigIntOperator: (param0: BigInt, param1: BigInt) => BigInt;
    // private intOperator: (param0: number, param1: number) => number;
    // private toBigIntNode: JSToBigIntNode;
    // private toIntNode: JSToInt32Node;
    // private atomicDoBigInt(target: JSTypedArrayObject, index: number, value: BigInt, typedArray: TypedArray$TypedBigIntArray): BigInt;
    // private atomicDoInt(target: JSTypedArrayObject, index: number, value: number, typedArray: TypedArray$TypedIntArray): number;
    doGeneric(maybeTarget: Object, index: Object, value: Object, toIndexNode: JSToIndexNode, notSharedArrayBuffer: InlinedBranchProfile): Object;
    doSharedBigInt64Array(target: JSTypedArrayObject, index: Object, value: Object, ta: TypedArray, toIndexNode: JSToIndexNode): BigInt;
    doSharedBigUint64Array(target: JSTypedArrayObject, index: Object, value: Object, ta: TypedArray, toIndexNode: JSToIndexNode): BigInt;
    doSharedInt16Array(target: JSTypedArrayObject, index: number, value: number, ta: TypedArray): number;
    doSharedInt32Array(target: JSTypedArrayObject, index: number, value: number, ta: TypedArray): number;
    doSharedInt32ArrayObjIdx(target: JSTypedArrayObject, index: Object, value: number, ta: TypedArray, toIndexNode: JSToIndexNode): number;
    doSharedInt8Array(target: JSTypedArrayObject, index: number, value: number, ta: TypedArray): number;
    doSharedUint16Array(target: JSTypedArrayObject, index: number, value: number, ta: TypedArray): number;
    doSharedUint32Array(target: JSTypedArrayObject, index: number, value: number, ta: TypedArray): SafeInteger;
    doSharedUint8Array(target: JSTypedArrayObject, index: number, value: number, ta: TypedArray): number;
    // private nonAtomicDoBigInt(target: JSTypedArrayObject, index: number, value: BigInt, typedArray: TypedArray$TypedBigIntArray): BigInt;
    // private nonAtomicDoInt(target: JSTypedArrayObject, index: number, value: number, typedArray: TypedArray$TypedIntArray): number;
    // private toBigInt(v: Object): BigInt;
    // private toBigIntChecked(v: Object, target: JSTypedArrayObject, index: number): BigInt;
    // private toInt(v: Object): number;
    // private toIntChecked(v: Object, target: JSTypedArrayObject, index: number): number;
}