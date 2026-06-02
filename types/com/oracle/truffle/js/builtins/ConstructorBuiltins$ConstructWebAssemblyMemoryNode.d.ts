import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ConstructorBuiltins$ConstructWithNewTargetNode } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$ConstructWithNewTargetNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { GetBooleanOptionNode } from '../../../../../com/oracle/truffle/js/nodes/intl/GetBooleanOptionNode.d.ts'
import type { ToWebAssemblyIndexOrSizeNode } from '../../../../../com/oracle/truffle/js/nodes/wasm/ToWebAssemblyIndexOrSizeNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSException } from '../../../../../com/oracle/truffle/js/runtime/JSException.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ConstructorBuiltins$ConstructWebAssemblyMemoryNode extends ConstructorBuiltins$ConstructWithNewTargetNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin, newTargetCase: boolean)
    // private getInitialNode: PropertyGetNode;
    // private getMaximumNode: PropertyGetNode;
    // private getSharedNode: GetBooleanOptionNode;
    // private isObjectNode: IsObjectNode;
    // private memAllocLib: InteropLibrary;
    // private toInitialSizeNode: ToWebAssemblyIndexOrSizeNode;
    // private toMaximumSizeNode: ToWebAssemblyIndexOrSizeNode;
    constructMemory(newTarget: JSDynamicObject, descriptor: Object, isShared: InlinedConditionProfile): JSObject;
    // private createCouldNotAllocateMemoryError(cause: AbstractTruffleException): JSException;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
}