import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
export class ClientUtilsKt extends Object {
    /**
     * Open uri in browser
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientUtils.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientUtils.kt:40}
     */
    static browseUrl(url: string): void;
    /**
     * Get a {@link Logger} with client name prefix
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientUtils.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientUtils.kt:27}
     */
    static clientLogger(name: string): Logger;
    /**
     * Get environment variable or system property.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientUtils.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientUtils.kt:45}
     */
    static env(name: string, property: string): string;
    static getClientStartDurationMs(): number;
    static getInGame(): boolean;
    static getLogger(): Logger;
}