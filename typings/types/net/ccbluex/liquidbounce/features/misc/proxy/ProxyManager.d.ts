import type { Result } from '../../../../../../kotlin/Result.d.ts'
import type { Config } from '../../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PipelineEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/PipelineEvent.d.ts'
import type { Proxy } from '../../../../../../net/ccbluex/liquidbounce/features/misc/proxy/Proxy.d.ts'
import type { Connection } from '../../../../../../net/minecraft/network/Connection.d.ts'
import type { Logger } from '../../../../../../org/apache/logging/log4j/Logger.d.ts'
/**
 * Proxy Manager
 *
 * Only supports SOCKS5 proxies.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/ProxyManager.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/ProxyManager.kt:40}
 */
export class ProxyManager extends Config implements EventListener {
    static INSTANCE: ProxyManager;
    // private clientConnections: Connection[];
    // private connectionTicker: EventHook<GameTickEvent>;
    /**
     * The proxy that is set in the current session and used for all server connections
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/ProxyManager.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/ProxyManager.kt:52}
     */
    readonly currentProxy: Proxy | null;
    // private logger: Logger;
    // private pipelineHandler: EventHook<PipelineEvent>;
    // private proxies: Proxy[];
    /*not mapped: */ getProxies$net_ccbluex_liquidbounce(): Proxy[];
    proxy: Proxy;
    addClientConnection(connection: Connection): void;
    children(): EventListener[];
    parent(): EventListener | null;
    unregister(): void;
    /**
     * Validate if {@link proxy} is working by sending a query-request to our Minecraft Ping Server.
     * This eliminates proxy that only work for HTTP(S) connections.
     *
     * This function also automatically adds the proxy to our list, if {@link index} is not provided.
     * If {@link index} is provided, it will swap out the proxy at that index with the new one.
     * If {@link checkOnly} is true, we will skip adding the proxy to our list.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/ProxyManager.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/ProxyManager.kt:73}
     */
    validateProxy(proxy: Proxy, index: number | null, checkOnly: boolean): Result<void>;
}