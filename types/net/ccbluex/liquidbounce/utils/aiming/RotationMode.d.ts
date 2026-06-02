import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ClientModule } from '../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
export class RotationMode extends Mode implements MinecraftShortcuts {
    static Companion: Tagged$Companion;
    protected constructor(name: string, modeValueGroup: ModeValueGroup<RotationMode>, module: ClientModule)
    /**
     * Instantly sends the action if possible.
     * This does not account for packet order and might flag on some anti-cheats.
     *
     * PostMove might be irrelevant if this is enabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationModes.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationModes.kt:45}
     */
    readonly instant: boolean;
    // private modeValueGroup: ModeValueGroup<RotationMode>;
    readonly module: ClientModule;
    readonly parent: ModeValueGroup<Object>;
    /**
     * Already sends the packet on post-move.
     * This might get us a little advantage because the packets are added a little bit earlier to the server tick queue.
     *
     * The downside is that it is not legit and will flag post-rotation checks on some anti-cheats.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationModes.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationModes.kt:37}
     */
    readonly postMove: boolean;
    rotate(rotation: Rotation, isFinished: () => kotlin.Boolean, onFinished: () => void): void;
}