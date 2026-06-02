import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { FailureHandlingKind } from '../../../../../../org/graalvm/tools/lsp/server/types/FailureHandlingKind.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { ResourceOperationKind } from '../../../../../../org/graalvm/tools/lsp/server/types/ResourceOperationKind.d.ts'
export class WorkspaceEditClientCapabilities extends JSONBase {
    static create(): WorkspaceEditClientCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDocumentChanges(): boolean;
    getFailureHandling(): FailureHandlingKind;
    getResourceOperations(): ResourceOperationKind[];
    hashCode(): number;
    setDocumentChanges(documentChanges: boolean): WorkspaceEditClientCapabilities;
    setFailureHandling(failureHandling: FailureHandlingKind): WorkspaceEditClientCapabilities;
    setResourceOperations(resourceOperations: ResourceOperationKind[]): WorkspaceEditClientCapabilities;
}