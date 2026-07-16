import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AtomicsBuiltins$AtomicsWaitAsyncNode } from '../../../../../com/oracle/truffle/js/builtins/AtomicsBuiltins$AtomicsWaitAsyncNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AtomicsBuiltinsFactory$AtomicsWaitAsyncNodeGen extends AtomicsBuiltins$AtomicsWaitAsyncNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: JavaScriptNode[]): AtomicsBuiltins$AtomicsWaitAsyncNode;
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
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private arguments2_: JavaScriptNode;
    // private arguments3_: JavaScriptNode;
    execute(frameValue: VirtualFrame): Object;
    getArguments(): JavaScriptNode[];
}