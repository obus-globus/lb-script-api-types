import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { DidChangeConfigurationClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/DidChangeConfigurationClientCapabilities.d.ts'
import type { DidChangeWatchedFilesClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/DidChangeWatchedFilesClientCapabilities.d.ts'
import type { ExecuteCommandClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/ExecuteCommandClientCapabilities.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { WorkspaceEditClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkspaceEditClientCapabilities.d.ts'
import type { WorkspaceSymbolClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkspaceSymbolClientCapabilities.d.ts'
export class WorkspaceClientCapabilities extends JSONBase {
    static create(): WorkspaceClientCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getApplyEdit(): boolean;
    getConfiguration(): boolean;
    getDidChangeConfiguration(): DidChangeConfigurationClientCapabilities;
    getDidChangeWatchedFiles(): DidChangeWatchedFilesClientCapabilities;
    getExecuteCommand(): ExecuteCommandClientCapabilities;
    getSymbol(): WorkspaceSymbolClientCapabilities;
    getWorkspaceEdit(): WorkspaceEditClientCapabilities;
    getWorkspaceFolders(): boolean;
    hashCode(): number;
    setApplyEdit(applyEdit: boolean): WorkspaceClientCapabilities;
    setConfiguration(configuration: boolean): WorkspaceClientCapabilities;
    setDidChangeConfiguration(didChangeConfiguration: DidChangeConfigurationClientCapabilities): WorkspaceClientCapabilities;
    setDidChangeWatchedFiles(didChangeWatchedFiles: DidChangeWatchedFilesClientCapabilities): WorkspaceClientCapabilities;
    setExecuteCommand(executeCommand: ExecuteCommandClientCapabilities): WorkspaceClientCapabilities;
    setSymbol(symbol: WorkspaceSymbolClientCapabilities): WorkspaceClientCapabilities;
    setWorkspaceEdit(workspaceEdit: WorkspaceEditClientCapabilities): WorkspaceClientCapabilities;
    setWorkspaceFolders(workspaceFolders: boolean): WorkspaceClientCapabilities;
}