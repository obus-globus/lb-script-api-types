import type { GpuDevice } from '../../../../../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { FloatFloatPair } from '../../../../../../../../../it/unimi/dsi/fastutil/floats/FloatFloatPair.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Minecraft } from '../../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Entity } from '../../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EndCrystal } from '../../../../../../../../../net/minecraft/world/entity/boss/enderdragon/EndCrystal.d.ts'
export class CrystalAuraDestroyTargetFactory extends Object implements MinecraftShortcuts {
    static INSTANCE: CrystalAuraDestroyTargetFactory;
    currentTarget: EndCrystal | null;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    readonly player: LocalPlayer;
    readonly world: ClientLevel;
    // private cannotSeeEntity(entity: Entity): boolean;
    // private dealsEnoughDamage(entity: Entity): FloatFloatPair | null;
    /**
     * For the main loop. Finds the best target in range.
     *
     * Updates the current target.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/destroy/CrystalAuraDestroyTargetFactory.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/destroy/CrystalAuraDestroyTargetFactory.kt:43}
     */
    updateTarget(): void;
    /**
     * For specific attacks, only checks if the given {@link crystal} is valid.
     *
     * Updates the current target.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/destroy/CrystalAuraDestroyTargetFactory.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/destroy/CrystalAuraDestroyTargetFactory.kt:59}
     */
    validateAndUpdateTarget(crystal: EndCrystal): void;
}