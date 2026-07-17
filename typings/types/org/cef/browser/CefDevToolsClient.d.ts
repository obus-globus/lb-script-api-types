import type { JavaMap } from '../../../JavaMap.d.ts'
import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser_N } from '../../../org/cef/browser/CefBrowser_N.d.ts'
import type { CefDevToolsClient$EventListener } from '../../../org/cef/browser/CefDevToolsClient$EventListener.d.ts'
import type { CefRegistration } from '../../../org/cef/browser/CefRegistration.d.ts'
export class CefDevToolsClient extends Object implements AutoCloseable {
    constructor(arg0: CefBrowser_N)
    // private browser_: CefBrowser_N;
    // private eventListeners_: CefDevToolsClient$EventListener[];
    // private queuedCommands_: JavaMap<number, CompletableFuture<string>>;
    // private registration_: CefRegistration;
    addEventListener(arg0: CefDevToolsClient$EventListener): void;
    close(): void;
    executeDevToolsMethod(arg0: string): CompletableFuture<string>;
    executeDevToolsMethod(arg0: string, arg1: string): CompletableFuture<string>;
    // private getQueuedCommand(arg0: number): CompletableFuture<string>;
    isClosed(): boolean;
    removeEventListener(arg0: CefDevToolsClient$EventListener): void;
    // private removeQueuedCommand(arg0: number): void;
}