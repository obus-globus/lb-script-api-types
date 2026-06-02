import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class ApplyWorkspaceEditResponse extends JSONBase {
    static create(paramapplied: boolean): ApplyWorkspaceEditResponse;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getFailedChange(): number;
    getFailureReason(): string;
    hashCode(): number;
    isApplied(): boolean;
    setApplied(applied: boolean): ApplyWorkspaceEditResponse;
    setFailedChange(failedChange: number): ApplyWorkspaceEditResponse;
    setFailureReason(failureReason: string): ApplyWorkspaceEditResponse;
}