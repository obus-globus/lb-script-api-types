import type { Command } from '../../../../../com/mojang/brigadier/Command.d.ts'
import type { CommandContext } from '../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { CoroutineExceptionHandler } from '../../../../../kotlinx/coroutines/CoroutineExceptionHandler.d.ts'
import type { CoroutineScope } from '../../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { ChatSendEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ChatSendEvent.d.ts'
import type { ClientShutdownEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ClientShutdownEvent.d.ts'
import type { KAsyncCommand$Handler } from '../../../../../net/ccbluex/liquidbounce/features/command/KAsyncCommand$Handler.d.ts'
import type { ClientCommandSource } from '../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Links minecraft with the command engine
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandExecutor.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandExecutor.kt:57}
 */
export class CommandExecutor extends Object implements EventListener {
    static INSTANCE: CommandExecutor;
    // private chatEventHandler: EventHook<ChatSendEvent>;
    // private commandCoroutineScope: CoroutineScope;
    // private commandHistoryFile: File;
    // private coroutineExceptionHandler: CoroutineExceptionHandler;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private isShuttingDown: boolean;
    readonly running: boolean;
    // private shutdownHandler: EventHook<ClientShutdownEvent>;
    children(): EventListener[];
    handleExceptions(e: Throwable): void;
    parent(): EventListener | null;
    unregister(): void;
    /**
     * Wraps a suspend handler into a Brigadier {@link Command}, keeping the scheduling,
     * re-entrance guard and progress-message behavior of the previous meta-model
     * `suspendHandler`.
     *
     * @param allowParallel allow or prevent duplicated executions
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandExecutor.kt#L71 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandExecutor.kt:71}
     */
    wrapSuspend(allowParallel: boolean, handler: KAsyncCommand$Handler<ClientCommandSource>): (param0: CommandContext<ClientCommandSource>) => number;
}