import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { PrimedTnt } from '../../../../../../../net/minecraft/world/entity/item/PrimedTnt.d.ts'
/**
 * TNTTimer module
 *
 * Highlight the active TNTs.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleTNTTimer.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleTNTTimer.kt:47}
 */
export class ModuleTNTTimer extends ClientModule {
    static INSTANCE: ModuleTNTTimer;
    // private DEFAULT_FUSE: number;
    readonly baseKey: string;
    readonly esp: boolean;
    // private tntEntities: PrimedTnt[];
    // private /*not mapped: */ getTntEntities(): PrimedTnt[];
    /**
     * Cycle light periodically according to the remaining time (`fuse`). The less time left, the faster the cycle.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleTNTTimer.kt#L103 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleTNTTimer.kt:103}
     */
    getTntColor(fuse: number): Color4b;
    onDisabled(): void;
}