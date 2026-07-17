import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ConstructorBuiltins$ConstructWithNewTargetNode } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$ConstructWithNewTargetNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ErrorStackTraceLimitNode } from '../../../../../com/oracle/truffle/js/nodes/access/ErrorStackTraceLimitNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { ReadElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { JSToBooleanNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { JSToLengthNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToLengthNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { ToWebAssemblyValueNode } from '../../../../../com/oracle/truffle/js/nodes/wasm/ToWebAssemblyValueNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSWebAssemblyExceptionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/wasm/JSWebAssemblyExceptionObject.d.ts'
import type { JSWebAssemblyTagObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/wasm/JSWebAssemblyTagObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ConstructorBuiltins$ConstructWebAssemblyExceptionNode extends ConstructorBuiltins$ConstructWithNewTargetNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin, newTargetCase: boolean)
    // private exnAllocLib: InteropLibrary;
    // private getLength: PropertyGetNode;
    // private getTraceStack: PropertyGetNode;
    // private captureStackTrace(exnObj: JSWebAssemblyExceptionObject, stackTraceLimit: number, newTarget: JSDynamicObject, realm: JSRealm): TruffleString;
    constructException(newTarget: JSDynamicObject, exceptionTag: Object, payload: Object, options: Object, toLengthNode: JSToLengthNode, readElementNode: ReadElementNode, isObjectNode: IsObjectNode, toBooleanNode: JSToBooleanNode, stackTraceLimitNode: ErrorStackTraceLimitNode, toWebAssemblyValueNode: ToWebAssemblyValueNode, errorBranch: InlinedBranchProfile): JSObject;
    countsTowardsStackTraceLimit(): boolean;
    // private exnAlloc(realm: JSRealm, exnTagObj: JSWebAssemblyTagObject, wasmPayload: Object[]): AbstractTruffleException;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
}