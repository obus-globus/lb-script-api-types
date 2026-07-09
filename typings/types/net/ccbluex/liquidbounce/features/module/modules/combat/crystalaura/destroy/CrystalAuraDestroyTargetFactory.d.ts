import type { FloatFloatPair } from '../../../../../../../../../it/unimi/dsi/fastutil/floats/FloatFloatPair.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Entity } from '../../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EndCrystal } from '../../../../../../../../../net/minecraft/world/entity/boss/enderdragon/EndCrystal.d.ts'
export class CrystalAuraDestroyTargetFactory extends Object implements MinecraftShortcuts {
    static INSTANCE: CrystalAuraDestroyTargetFactory;
    currentTarget: EndCrystal | null;
    // private cannotSeeEntity(entity: Entity): boolean;
    // private dealsEnoughDamage(entity: Entity): FloatFloatPair | null;
    /**
     * For the main loop. Finds the best target in range.
     *
     * Updates the current target.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/destroy/CrystalAuraDestroyTargetFactory.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/destroy/CrystalAuraDestroyTargetFactory.kt:41}
     */
    updateTarget(): void;
    /**
     * For specific attacks, only checks if the given {@link crystal} is valid.
     *
     * Updates the current target.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/destroy/CrystalAuraDestroyTargetFactory.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/destroy/CrystalAuraDestroyTargetFactory.kt:61}
     */
    validateAndUpdateTarget(crystal: EndCrystal): void;
}