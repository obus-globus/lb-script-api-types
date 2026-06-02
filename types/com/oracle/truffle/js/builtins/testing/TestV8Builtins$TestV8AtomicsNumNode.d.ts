import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AtomicsBuiltins$AtomicsOperationNode } from '../../../../../../com/oracle/truffle/js/builtins/AtomicsBuiltins$AtomicsOperationNode.d.ts'
import type { TestV8Builtins$TestV8 } from '../../../../../../com/oracle/truffle/js/builtins/testing/TestV8Builtins$TestV8.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIndexNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TestV8Builtins$TestV8AtomicsNumNode extends AtomicsBuiltins$AtomicsOperationNode {
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
    constructor(context: JSContext, builtin: JSBuiltin, getter: TestV8Builtins$TestV8)
    // private getter: TestV8Builtins$TestV8;
    // private ensureSharedArray(maybeTarget: Object): JSTypedArrayObject;
    num(maybeTarget: Object, index: Object, toIndexNode: JSToIndexNode): number;
    // private numUnresolvedAsyncPromises(target: JSTypedArrayObject, i: number): number;
    // private numWaiters(target: JSTypedArrayObject, i: number): number;
}