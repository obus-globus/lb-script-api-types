import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { FloatFloatPair } from '../../../../../../../../it/unimi/dsi/fastutil/floats/FloatFloatPair.d.ts'
import type { ValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { CrystalAuraDamageOptions$DamageConstellation } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/CrystalAuraDamageOptions$DamageConstellation.d.ts'
import type { CrystalAuraDamageOptions$RequestingSubmodule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/CrystalAuraDamageOptions$RequestingSubmodule.d.ts'
import type { DamageProvider } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class CrystalAuraDamageOptions extends ValueGroup {
    static INSTANCE: CrystalAuraDamageOptions;
    // private antiSuicide: boolean;
    // private /*not mapped: */ getAntiSuicide(): boolean;
    readonly cacheMap: JavaMap<CrystalAuraDamageOptions$DamageConstellation, DamageProvider>;
    /**
     * Only places / breaks crystals that deal more damage to the enemy than to us.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/CrystalAuraDamageOptions.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/CrystalAuraDamageOptions.kt:51}
     */
    readonly efficient: boolean;
    // private maxFriendDamage: number;
    // private /*not mapped: */ getMaxFriendDamage(): number;
    // private maxSelfDamage: number;
    // private /*not mapped: */ getMaxSelfDamage(): number;
    // private minEnemyDamage: number;
    // private /*not mapped: */ getMinEnemyDamage(): number;
    /**
     * Doesn't include blocks that will get blown away in the exposure calculation used for the damage calculation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/CrystalAuraDamageOptions.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/CrystalAuraDamageOptions.kt:56}
     */
    readonly terrain: boolean;
    /**
     * Approximates how favorable an explosion of a crystal at {@link pos} in a given {@link world} would be.
     *
     * The first float is the self-damage, the second is the enemy damage.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/CrystalAuraDamageOptions.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/CrystalAuraDamageOptions.kt:65}
     */
    approximateExplosionDamage(pos: Vec3, requestingSubmodule: CrystalAuraDamageOptions$RequestingSubmodule): FloatFloatPair | null;
}