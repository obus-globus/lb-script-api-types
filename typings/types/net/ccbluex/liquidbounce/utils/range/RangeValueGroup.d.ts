import type { GpuDevice } from '../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { AttackRange } from '../../../../../net/minecraft/world/item/component/AttackRange.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Allows adjusting your attack range and scan range.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/utils/range/RangeValueGroup.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/utils/range/RangeValueGroup.kt:35}
 */
export class RangeValueGroup extends ValueGroup implements MinecraftShortcuts {
    constructor(name: string, maxRangeIncrease: number, throughWallsRange: number)
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    /**
     * @see net.minecraft.world.entity.player.Player.entityInteractionRange
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/utils/range/RangeValueGroup.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/utils/range/RangeValueGroup.kt:44}
     */
    readonly interactionRange: number;
    readonly interactionThroughWallsRange: number;
    // private maxRangeIncrease: number;
    // private /*not mapped: */ getMaxRangeIncrease(): number;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    readonly player: LocalPlayer;
    // private throughWallsRange: number;
    // private /*not mapped: */ getThroughWallsRange(): number;
    readonly world: ClientLevel;
    adjustAttackRange(attackRange: AttackRange): AttackRange;
    getAttackRange(itemStack: ItemStack): AttackRange;
    isInRange(itemStack: ItemStack, pos: Vec3): boolean;
}