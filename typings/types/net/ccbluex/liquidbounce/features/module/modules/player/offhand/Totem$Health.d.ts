import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * Switch to a totem on low health and back to the original item when the health goes up again.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/Totem.kt#L62 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/Totem.kt:62}
 */
export class Totem$Health extends ToggleableValueGroup {
    static INSTANCE: Totem$Health;
    // private explosionDamage: boolean;
    // private /*not mapped: */ getExplosionDamage(): boolean;
    // private explosionDamageBlocks: boolean;
    // private /*not mapped: */ getExplosionDamageBlocks(): boolean;
    // private healthThreshold: number;
    // private /*not mapped: */ getHealthThreshold(): number;
    // private missingArmor: boolean;
    // private /*not mapped: */ getMissingArmor(): boolean;
    // private sphere: BlockPos[] | null;
    // private subtractCalculatedDamage: boolean;
    // private /*not mapped: */ getSubtractCalculatedDamage(): boolean;
    readonly switchBack: boolean;
    // private getDamageFromBlocks(allowedDamage: number): number;
    // private getDamageFromEntities(allowedDamage: number): number;
    healthBelowThreshold(): boolean;
}