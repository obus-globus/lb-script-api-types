import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
export class ScaffoldTower extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string)
    readonly parent: ModeValueGroup<Object>;
    /**
     * Overwrites the {@link ModuleScaffold.getTargetedPosition} with a tower-specific one.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/tower/ScaffoldTower.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/tower/ScaffoldTower.kt:32}
     */
    getTargetedPosition(blockPos: BlockPos): BlockPos;
}