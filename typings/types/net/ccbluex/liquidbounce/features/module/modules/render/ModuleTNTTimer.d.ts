import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
/**
 * TNTTimer module
 *
 * Highlight the active TNTs.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleTNTTimer.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleTNTTimer.kt:48}
 */
export class ModuleTNTTimer extends ClientModule {
    static INSTANCE: ModuleTNTTimer;
    // private DEFAULT_FUSE: number;
    readonly baseKey: string;
    readonly esp: boolean;
    /**
     * Cycle light periodically according to the remaining time (`fuse`). The less time left, the faster the cycle.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleTNTTimer.kt#L131 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleTNTTimer.kt:131}
     */
    getTntColor(fuse: number): Color4b;
}