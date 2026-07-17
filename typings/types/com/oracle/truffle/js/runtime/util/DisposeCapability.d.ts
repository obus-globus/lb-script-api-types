import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { DisposeCapability$DisposableResource } from '../../../../../../com/oracle/truffle/js/runtime/util/DisposeCapability$DisposableResource.d.ts'
import type { SimpleArrayList } from '../../../../../../com/oracle/truffle/js/runtime/util/SimpleArrayList.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DisposeCapability extends Object {
    static NO_ERROR: Object;
    static forCallback(paramdisposeMethod: Object, paramargument: Object, paramasyncDispose: boolean): DisposeCapability$DisposableResource;
    static forResource(paramresourceValue: Object, paramasyncDispose: boolean, paramdisposeMethod: Object): DisposeCapability$DisposableResource;
    constructor()
    // private disposableResourceStack: SimpleArrayList<DisposeCapability$DisposableResource>;
    isEmpty(): boolean;
    popResource(): DisposeCapability$DisposableResource;
    pushResource(resource: DisposeCapability$DisposableResource, node: Node, growProfile: InlinedBranchProfile): void;
    pushResourceUnchecked(resource: DisposeCapability$DisposableResource): void;
}