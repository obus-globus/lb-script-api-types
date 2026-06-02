import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ApplyWorkspaceEditParams } from '../../../../../../org/graalvm/tools/lsp/server/types/ApplyWorkspaceEditParams.d.ts'
import type { ApplyWorkspaceEditResponse } from '../../../../../../org/graalvm/tools/lsp/server/types/ApplyWorkspaceEditResponse.d.ts'
import type { ConfigurationParams } from '../../../../../../org/graalvm/tools/lsp/server/types/ConfigurationParams.d.ts'
import type { LogMessageParams } from '../../../../../../org/graalvm/tools/lsp/server/types/LogMessageParams.d.ts'
import type { MessageActionItem } from '../../../../../../org/graalvm/tools/lsp/server/types/MessageActionItem.d.ts'
import type { PublishDiagnosticsParams } from '../../../../../../org/graalvm/tools/lsp/server/types/PublishDiagnosticsParams.d.ts'
import type { RegistrationParams } from '../../../../../../org/graalvm/tools/lsp/server/types/RegistrationParams.d.ts'
import type { ShowMessageParams } from '../../../../../../org/graalvm/tools/lsp/server/types/ShowMessageParams.d.ts'
import type { ShowMessageRequestParams } from '../../../../../../org/graalvm/tools/lsp/server/types/ShowMessageRequestParams.d.ts'
import type { UnregistrationParams } from '../../../../../../org/graalvm/tools/lsp/server/types/UnregistrationParams.d.ts'
import type { WorkDoneProgressCreateParams } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressCreateParams.d.ts'
import type { WorkspaceFolder } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkspaceFolder.d.ts'
export interface LanguageClient extends Object{
    applyEdit(params: ApplyWorkspaceEditParams): CompletableFuture<ApplyWorkspaceEditResponse>;
    configuration(params: ConfigurationParams): CompletableFuture<Object[]>;
    createProgress(params: WorkDoneProgressCreateParams): CompletableFuture<void>;
    event(object: Object): void;
    logMessage(params: LogMessageParams): void;
    publishDiagnostics(params: PublishDiagnosticsParams): void;
    registerCapability(params: RegistrationParams): CompletableFuture<void>;
    sendCustomNotification(method: string, params: Object): void;
    showMessage(params: ShowMessageParams): void;
    showMessageRequest(params: ShowMessageRequestParams): CompletableFuture<MessageActionItem>;
    unregisterCapability(params: UnregistrationParams): CompletableFuture<void>;
    workspaceFolders(): CompletableFuture<WorkspaceFolder[]>;
}