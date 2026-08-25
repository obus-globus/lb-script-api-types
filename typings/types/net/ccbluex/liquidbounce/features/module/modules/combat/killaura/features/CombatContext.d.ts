import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { CombatTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/CombatTarget.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Data class holding combat-related context
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraFightBot.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraFightBot.kt:45}
 */
export class CombatContext extends Object {
    constructor(playerPosition: Vec3, combatTarget: CombatTarget | null)
    readonly combatTarget: CombatTarget | null;
    readonly playerPosition: Vec3;
    component1(): Vec3;
    component2(): CombatTarget | null;
    copy(playerPosition: Vec3, combatTarget: CombatTarget | null): CombatContext;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}