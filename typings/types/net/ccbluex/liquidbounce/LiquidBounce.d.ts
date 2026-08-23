import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineDispatcher } from '../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { EventHook } from '../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { ClientShutdownEvent } from '../../../net/ccbluex/liquidbounce/event/events/ClientShutdownEvent.d.ts'
import type { ClientStartEvent } from '../../../net/ccbluex/liquidbounce/event/events/ClientStartEvent.d.ts'
import type { ScreenEvent } from '../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { TaskManager } from '../../../net/ccbluex/liquidbounce/integration/task/TaskManager.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { Logger } from '../../../org/apache/logging/log4j/Logger.d.ts'
/**
 * LiquidBounce
 *
 * A free mixin-based injection hacked-client for Minecraft using FabricMC.
 *
 * @author kawaiinekololis (@team CCBlueX)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt:105}
 */
export class LiquidBounce extends Object implements EventListener {
    static CLIENT_AUTHOR: string;
    /**
     * CLIENT INFORMATION
     *
     * WARNING: Please read the GNU General Public License
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt#L112 | src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt:112}
     */
    static CLIENT_NAME: string;
    static INSTANCE: LiquidBounce;
    /**
     * Defines if the client is in development mode.
     * This will enable update checking on commit time instead of semantic versioning.
     *
     * TODO: Replace this approach with full semantic versioning.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt#L148 | src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt:148}
     */
    static IN_DEVELOPMENT: boolean;
    /**
     * Creates an {@link net.minecraft.resources.Identifier} starts with {@link CLIENT_NAME}.
     *
     * Warning: Use {@link clientIdentifier} to prevent silent `<clinit>` invocation
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt#L165 | src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt:165}
     */
    static identifier(path: string): Identifier;
    /**
     * Gets client resource.
     *
     * @param path @throws IllegalArgumentException if the resource is not found
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt#L174 | src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt:174}
     */
    static resource(path: string): InputStream;
    /**
     * Gets client resource as string.
     *
     * @param path @throws IllegalArgumentException if the resource is not found
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt#L185 | src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt:185}
     */
    static resourceToString(path: string): string;
    CLIENT_AUTHOR: string;
    CLIENT_NAME: string;
    IN_DEVELOPMENT: boolean;
    readonly clientBranch: string;
    readonly clientCommit: string;
    readonly clientVersion: string;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private isInitialized: boolean;
    /*not mapped: */ isInitialized(): boolean;
    /**
     * Client logger to print out console messages
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt#L153 | src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt:153}
     */
    readonly logger: Logger;
    readonly running: boolean;
    // private screenHandler: EventHook<ScreenEvent>;
    // private shutdownHandler: EventHook<ClientShutdownEvent>;
    // private startHandler: EventHook<ClientStartEvent>;
    taskManager: TaskManager | null;
    children(): EventListener[];
    identifier(path: string): Identifier;
    // private initializeClient(workerDispatcher: CoroutineDispatcher, renderThreadDispatcher: CoroutineDispatcher): CompletableFuture<void>;
    // private initializeFeatures(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private initializeManagers(workerDispatcher: CoroutineDispatcher, renderThreadDispatcher: CoroutineDispatcher, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private initializeResources(dispatcher: CoroutineDispatcher, $completion: Continuation<void>): any;
    parent(): EventListener | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private prepareGuiStage(dispatcher: CoroutineDispatcher, $completion: Continuation<void>): any;
    resource(path: string): InputStream;
    resourceToString(path: string): string;
    // private shutdownClient(): void;
    unregister(): void;
}