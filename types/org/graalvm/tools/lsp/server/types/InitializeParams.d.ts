import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { ClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/ClientCapabilities.d.ts'
import type { InitializeParams$ClientInfoParams } from '../../../../../../org/graalvm/tools/lsp/server/types/InitializeParams$ClientInfoParams.d.ts'
import type { WorkDoneProgressParams } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressParams.d.ts'
import type { WorkspaceFolder } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkspaceFolder.d.ts'
export class InitializeParams extends WorkDoneProgressParams {
    static create(paramprocessId: number, paramrootUri: string, paramcapabilities: ClientCapabilities, paramworkspaceFolders: WorkspaceFolder[]): InitializeParams;
    static create(): WorkDoneProgressParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCapabilities(): ClientCapabilities;
    getClientInfo(): InitializeParams$ClientInfoParams;
    getInitializationOptions(): Object;
    getProcessId(): number;
    getRootPath(): string;
    getRootUri(): string;
    getTrace(): string;
    getWorkspaceFolders(): WorkspaceFolder[];
    hashCode(): number;
    setCapabilities(capabilities: ClientCapabilities): InitializeParams;
    setClientInfo(clientInfo: InitializeParams$ClientInfoParams): InitializeParams;
    setInitializationOptions(initializationOptions: Object): InitializeParams;
    setProcessId(processId: number): InitializeParams;
    setRootPath(rootPath: string): InitializeParams;
    setRootUri(rootUri: string): InitializeParams;
    setTrace(trace: string): InitializeParams;
    setWorkspaceFolders(workspaceFolders: WorkspaceFolder[]): InitializeParams;
}