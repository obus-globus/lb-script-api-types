import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
export class ClientUtilsKt extends Object {
    /**
     * Open uri in browser
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientUtils.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientUtils.kt:43}
     */
    static browseUrl(url: string): void;
    /**
     * Get a {@link Logger} with client name prefix
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientUtils.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientUtils.kt:30}
     */
    static clientLogger(name: string): Logger;
    /**
     * Get environment variable or system property.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientUtils.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientUtils.kt:48}
     */
    static env(name: string, property: string): string | null;
    static getClientStartDurationMs(): number;
    static getInGame(): boolean;
    static getLogger(): Logger;
}