import type { GpuDevice } from '../../../../../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { MineTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineTarget.d.ts'
import type { SwitchMethod } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/tool/SwitchMethod.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { Minecraft } from '../../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
/**
 * Determines when to switch to a tool and calculates the breaking process delta.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/tool/MineToolMode.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/tool/MineToolMode.kt:42}
 */
export class MineToolMode extends Mode implements MinecraftShortcuts {
    static Companion: Tagged$Companion;
    protected constructor(choiceName: string, syncOnStart: boolean, switchesNever: boolean)
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    readonly player: LocalPlayer;
    // private switchesNever: boolean;
    readonly syncOnStart: boolean;
    readonly world: ClientLevel;
    getBlockBreakingDelta(pos: BlockPos, state: BlockState, itemStack: ItemStack | null): number;
    getSlot(state: BlockState): HotbarItemSlot | null;
    getSwitchingMethod(): SwitchMethod;
    shouldSwitch(mineTarget: MineTarget): boolean;
}