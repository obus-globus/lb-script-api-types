import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { TruffleAdapter } from '../../../../../org/graalvm/tools/lsp/server/TruffleAdapter.d.ts'
import type { LanguageServer$DelegateServer } from '../../../../../org/graalvm/tools/lsp/server/types/LanguageServer$DelegateServer.d.ts'
import type { LanguageServer$LoggerProxy } from '../../../../../org/graalvm/tools/lsp/server/types/LanguageServer$LoggerProxy.d.ts'
export class DelegateServers extends Object {
    constructor(truffleAdapter: TruffleAdapter, delegateServers: LanguageServer$DelegateServer[], logger: LanguageServer$LoggerProxy)
    // private delegateServers: LanguageServer$DelegateServer[];
    // private logger: LanguageServer$LoggerProxy;
    // private truffleAdapter: TruffleAdapter;
    close(): void;
    // private findContextLanguage(params: JSONObject): string;
    mergeResults(id: Object, result: Object): Object;
    sendMessageToDelegates(buffer: number[], id: Object, method: string, params: JSONObject): void;
    submitAll(executors: ExecutorService): void;
}