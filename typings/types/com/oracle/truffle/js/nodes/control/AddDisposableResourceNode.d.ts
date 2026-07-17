import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { DisposeCapability } from '../../../../../../com/oracle/truffle/js/runtime/util/DisposeCapability.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AddDisposableResourceNode extends JavaScriptBaseNode {
    static addCallback(paramcapability: DisposeCapability, paramdisposeMethod: Object, paramargument: Object, paramasyncDispose: boolean, paramnode: Node, paramgrowProfile: InlinedBranchProfile): void;
    static create(paramcontext: JSContext, paramasyncDispose: boolean): AddDisposableResourceNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, asyncDispose: boolean)
    // private asyncDispose: boolean;
    // private context: JSContext;
    // private errorProfile: BranchProfile;
    // private getAsyncDisposeMethodNode: GetMethodNode;
    // private getDisposeMethodNode: GetMethodNode;
    // private isObjectNode: IsObjectNode;
    // private setSyncDisposeMethodNode: PropertySetNode;
    // private createAsyncDisposeFromSyncDisposeMethod(syncDisposeMethod: Object): JSFunctionObject;
    doResource(capability: DisposeCapability, value: Object, growProfile: InlinedBranchProfile): void;
    execute(capability: DisposeCapability, value: Object): void;
    executeImpl(capability: DisposeCapability, value: Object): void;
    // private getDisposeMethod(value: Object): Object;
}