import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineDispatcher } from '../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { EventHook } from '../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { ClientShutdownEvent } from '../../../net/ccbluex/liquidbounce/event/events/ClientShutdownEvent.d.ts'
import type { ClientStartEvent } from '../../../net/ccbluex/liquidbounce/event/events/ClientStartEvent.d.ts'
import type { ScreenEvent } from '../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { TaskManager } from '../../../net/ccbluex/liquidbounce/integration/task/TaskManager.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { Logger } from '../../../org/apache/logging/log4j/Logger.d.ts'
/**
 * LiquidBounce
 *
 * A free mixin-based injection hacked-client for Minecraft using FabricMC.
 *
 * @author kawaiinekololis (@team CCBlueX)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt#L106 | src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt:106}
 */
export class LiquidBounce extends Object implements EventListener {
    static CLIENT_AUTHOR: string;
    /**
     * CLIENT INFORMATION
     *
     * WARNING: Please read the GNU General Public License
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt#L113 | src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt:113}
     */
    static CLIENT_NAME: string;
    static INSTANCE: LiquidBounce;
    /**
     * Defines if the client is in development mode.
     * This will enable update checking on commit time instead of semantic versioning.
     *
     * TODO: Replace this approach with full semantic versioning.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt#L149 | src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt:149}
     */
    static IN_DEVELOPMENT: boolean;
    /**
     * Creates an {@link net.minecraft.resources.Identifier} starts with {@link CLIENT_NAME}.
     *
     * Warning: Use {@link clientIdentifier} to prevent silent `<clinit>` invocation
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt#L166 | src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt:166}
     */
    static identifier(path: string): Identifier;
    /**
     * Gets client resource.
     *
     * @param path @throws IllegalArgumentException if the resource is not found
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt#L175 | src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt:175}
     */
    static resource(path: string): InputStream;
    /**
     * Gets client resource as string.
     *
     * @param path @throws IllegalArgumentException if the resource is not found
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt#L186 | src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt:186}
     */
    static resourceToString(path: string): string;
    CLIENT_AUTHOR: string;
    CLIENT_NAME: string;
    IN_DEVELOPMENT: boolean;
    readonly clientBranch: string;
    readonly clientCommit: string;
    readonly clientVersion: string;
    // private isInitialized: boolean;
    /*not mapped: */ isInitialized(): boolean;
    /**
     * Client logger to print out console messages
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt#L154 | src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt:154}
     */
    readonly logger: Logger;
    // private screenHandler: EventHook<ScreenEvent>;
    // private shutdownHandler: EventHook<ClientShutdownEvent>;
    // private startHandler: EventHook<ClientStartEvent>;
    taskManager: TaskManager | null;
    children(): EventListener[];
    identifier(path: string): Identifier;
    // private initializeClient(workerDispatcher: CoroutineDispatcher, renderThreadDispatcher: CoroutineDispatcher): CompletableFuture<void>;
    // private initializeFeatures(): void;
    // private initializeManagers(workerDispatcher: CoroutineDispatcher, renderThreadDispatcher: CoroutineDispatcher): void;
    // private initializeResources(dispatcher: CoroutineDispatcher): void;
    parent(): EventListener | null;
    // private prepareGuiStage(dispatcher: CoroutineDispatcher): void;
    resource(path: string): InputStream;
    resourceToString(path: string): string;
    // private shutdownClient(): void;
    unregister(): void;
}