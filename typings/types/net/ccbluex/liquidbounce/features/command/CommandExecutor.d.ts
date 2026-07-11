import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { CoroutineExceptionHandler } from '../../../../../kotlinx/coroutines/CoroutineExceptionHandler.d.ts'
import type { CoroutineScope } from '../../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { ChatSendEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ChatSendEvent.d.ts'
import type { ClientShutdownEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ClientShutdownEvent.d.ts'
/**
 * Links minecraft with the command engine
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandExecutor.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandExecutor.kt:63}
 */
export class CommandExecutor extends Object implements EventListener {
    static INSTANCE: CommandExecutor;
    // private chatEventHandler: EventHook<ChatSendEvent>;
    // private commandCoroutineScope: CoroutineScope;
    // private commandHistoryFile: File;
    // private coroutineExceptionHandler: CoroutineExceptionHandler;
    // private isShuttingDown: boolean;
    // private shutdownHandler: EventHook<ClientShutdownEvent>;
    children(): EventListener[];
    handleExceptions(e: Throwable): void;
    parent(): EventListener | null;
    unregister(): void;
}