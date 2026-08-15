import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
export class ScaffoldTower extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string)
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    /**
     * Overwrites the {@link ModuleScaffold.getTargetedPosition} with a tower-specific one.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/tower/ScaffoldTower.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/tower/ScaffoldTower.kt:35}
     */
    getTargetedPosition(blockPos: BlockPos): BlockPos;
}