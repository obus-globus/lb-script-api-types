import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { AtomicsBuiltins$AtomicsOperationNode } from '../../../../../com/oracle/truffle/js/builtins/AtomicsBuiltins$AtomicsOperationNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToBigIntNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToBigIntNode.d.ts'
import type { JSToIndexNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToIndexNode.d.ts'
import type { JSToInt32Node } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { BigInt } from '../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { TypedArray$TypedBigIntArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray$TypedBigIntArray.d.ts'
import type { TypedArray$TypedIntArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray$TypedIntArray.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AtomicsBuiltins$AtomicsCompareExchangeNode extends AtomicsBuiltins$AtomicsOperationNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
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
    constructor(context: JSContext, builtin: JSBuiltin)
    // private toBigIntNode: JSToBigIntNode;
    // private toIntNode: JSToInt32Node;
    doBigInt64ArrayObjObjIdx(target: JSTypedArrayObject, index: Object, expected: Object, replacement: Object, ta: TypedArray, toIndexNode: JSToIndexNode): BigInt;
    doBigUint64ArrayObjObjIdx(target: JSTypedArrayObject, index: Object, expected: Object, replacement: Object, ta: TypedArray, toIndexNode: JSToIndexNode): BigInt;
    doCASBigInt(target: JSTypedArrayObject, index: number, expected: BigInt, replacement: BigInt, typedArray: TypedArray$TypedBigIntArray): BigInt;
    doCASInt(target: JSTypedArrayObject, index: number, expected: number, replacement: number, typedArray: TypedArray$TypedIntArray): number;
    doCASUint32(target: JSTypedArrayObject, index: number, expected: number, replacement: number, typedArray: TypedArray$TypedIntArray): Object;
    doGeneric(maybeTarget: Object, index: Object, expected: Object, replacement: Object, toIndexNode: JSToIndexNode, notSharedArrayBuffer: InlinedBranchProfile): Object;
    doInt16Array(target: JSTypedArrayObject, index: number, expected: number, replacement: number, ta: TypedArray): number;
    doInt32ArrayInt(target: JSTypedArrayObject, index: number, expected: number, replacement: number, ta: TypedArray): number;
    doInt32ArrayIntObjIdx(target: JSTypedArrayObject, index: Object, expected: number, replacement: number, ta: TypedArray, toIndexNode: JSToIndexNode): number;
    doInt32ArrayObj(target: JSTypedArrayObject, index: number, expected: Object, replacement: Object, ta: TypedArray): number;
    doInt32ArrayObjObjIdx(target: JSTypedArrayObject, index: Object, expected: Object, replacement: Object, ta: TypedArray, toIndexNode: JSToIndexNode): number;
    doInt8Array(target: JSTypedArrayObject, index: number, expected: number, replacement: number, ta: TypedArray): number;
    doUint16Array(target: JSTypedArrayObject, index: number, expected: number, replacement: number, ta: TypedArray): number;
    doUint32Array(target: JSTypedArrayObject, index: number, expected: number, replacement: number, ta: TypedArray): Object;
    doUint8Array(target: JSTypedArrayObject, index: number, expected: number, replacement: number, ta: TypedArray): number;
    // private toBigInt(v: Object): BigInt;
    // private toInt(v: Object): number;
}