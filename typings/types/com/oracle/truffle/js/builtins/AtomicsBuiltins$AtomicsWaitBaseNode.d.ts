import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { ConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { AtomicsBuiltins$AtomicsLoadNode } from '../../../../../com/oracle/truffle/js/builtins/AtomicsBuiltins$AtomicsLoadNode.d.ts'
import type { AtomicsBuiltins$AtomicsOperationNode } from '../../../../../com/oracle/truffle/js/builtins/AtomicsBuiltins$AtomicsOperationNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateDataPropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateDataPropertyNode.d.ts'
import type { CreateObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateObjectNode.d.ts'
import type { JSToBigIntNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToBigIntNode.d.ts'
import type { JSToDoubleNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { JSToIndexNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToIndexNode.d.ts'
import type { JSToInt32Node } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { NewPromiseCapabilityNode } from '../../../../../com/oracle/truffle/js/nodes/promise/NewPromiseCapabilityNode.d.ts'
import type { BigInt } from '../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { TypedArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AtomicsBuiltins$AtomicsWaitBaseNode extends AtomicsBuiltins$AtomicsOperationNode {
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
    // private asyncImmediateTimeoutBranch: BranchProfile;
    // private awokenProfile: ConditionProfile;
    // private createAsyncPropertyNode: CreateDataPropertyNode;
    // private createValuePropertyNode: CreateDataPropertyNode;
    // private errorBranch: BranchProfile;
    // private isAsyncProfile: ConditionProfile;
    // private loadNode: AtomicsBuiltins$AtomicsLoadNode;
    // private newPromiseCapabilityNode: NewPromiseCapabilityNode;
    // private notSharedArrayBuffer: BranchProfile;
    // private objectCreateNode: CreateObjectNode;
    // private timeoutNaNProfile: ConditionProfile;
    // private toBigIntNode: JSToBigIntNode;
    // private toDoubleNode: JSToDoubleNode;
    // private toIndexNode: JSToIndexNode;
    // private toInt32Node: JSToInt32Node;
    // private valuesNotEqualBranch: BranchProfile;
    doWait(frame: VirtualFrame, maybeTarget: Object, index: Object, value: Object, timeout: Object, isAsync: boolean): Object;
    // private newPromiseCapability(): PromiseCapabilityRecord;
    // private ordinaryObjectCreate(realm: JSRealm): JSObject;
    // private toBigInt(v: Object): BigInt;
    // private toInt32(v: Object): number;
}