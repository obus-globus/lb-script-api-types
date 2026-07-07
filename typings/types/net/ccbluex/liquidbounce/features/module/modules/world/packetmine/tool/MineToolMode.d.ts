import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { MineTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineTarget.d.ts'
import type { SwitchMethod } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/tool/SwitchMethod.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
/**
 * Determines when to switch to a tool and calculates the breaking process delta.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/tool/MineToolMode.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/tool/MineToolMode.kt:42}
 */
export class MineToolMode extends Mode implements MinecraftShortcuts {
    static Companion: Tagged$Companion;
    protected constructor(choiceName: string, syncOnStart: boolean, switchesNever: boolean)
    readonly parent: ModeValueGroup<any>;
    // private switchesNever: boolean;
    readonly syncOnStart: boolean;
    getBlockBreakingDelta(pos: BlockPos, state: BlockState, itemStack: ItemStack | null): number;
    getSlot(state: BlockState): HotbarItemSlot | null;
    getSwitchingMethod(): SwitchMethod;
    shouldSwitch(mineTarget: MineTarget): boolean;
}