import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Socket } from '../../../../../../java/net/Socket.d.ts'
import type { SocketAddress } from '../../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { TruffleAdapter } from '../../../../../../org/graalvm/tools/lsp/server/TruffleAdapter.d.ts'
import type { LanguageServer$LoggerProxy } from '../../../../../../org/graalvm/tools/lsp/server/types/LanguageServer$LoggerProxy.d.ts'
import type { ServerCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/ServerCapabilities.d.ts'
export class LanguageServer$DelegateServer extends Object implements Runnable {
    constructor(languageId: string, socketAddress: SocketAddress, serverOutput: OutputStream, truffleAdapter: TruffleAdapter, logger: LanguageServer$LoggerProxy)
    readonly capabilities: ServerCapabilities;
    // private in: InputStream;
    // private initializeId: Object;
    readonly languageId: string;
    // private logger: LanguageServer$LoggerProxy;
    // private out: OutputStream;
    // private receivedMessages: JavaMap<Object, JSONObject>;
    // private serverOutput: OutputStream;
    // private socket: Socket;
    // private truffleAdapter: TruffleAdapter;
    // private addAwaitingId(id: Object): void;
    awaitMessage(id: Object): JSONObject;
    close(): void;
    getAddress(): string;
    getCapabilities(): ServerCapabilities;
    getLanguageId(): string;
    run(): void;
    sendMessage(bytes: number[], id: Object, method: string): void;
    toString(): string;
}