import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { SwingMode } from '../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class CombatExtensionsKt extends Object {
    /**
     * @see net.minecraft.client.Minecraft.startAttack
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatExtensions.kt#L239 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatExtensions.kt:239}
     */
    static attackEntity(paramarg0: Entity, paramarg1: SwingMode, paramarg2: boolean): void;
    static findEnemies(paramarg0: ClientLevel, paramarg1: number, paramarg2: number): (Object | null)[];
    static findEnemies(paramarg0: ClientLevel, paramarg1: number, paramarg2: number, paramarg3: (Object | null)[]): (Object | null)[];
    /**
     * Find the best enemy in the current world in a specific range.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatExtensions.kt#L185 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatExtensions.kt:185}
     */
    static findEnemy(paramarg0: ClientLevel, paramarg1: number, paramarg2: number): Entity;
    static findEnemy(paramarg0: ClientLevel, paramarg1: number, paramarg2: number, paramarg3: (Object | null)[]): Entity;
    static findEnemy(paramarg0: ClientLevel, paramarg1: ClosedFloatingPointRange<number>): Entity;
    static findEnemy(paramarg0: ClientLevel, paramarg1: ClosedFloatingPointRange<number>, paramarg2: (Object | null)[]): Entity;
    static getEntitiesBoxInRange(paramarg0: ClientLevel, paramarg1: Vec3, paramarg2: number, paramarg3: Function1<Object, boolean>): Entity[];
    static shouldBeAttacked(paramarg0: Entity): boolean;
    static shouldBeAttacked(paramarg0: Entity, paramarg1: (Object | null)[]): boolean;
    static shouldBeShown(paramarg0: Entity): boolean;
    static shouldBeShown(paramarg0: Entity, paramarg1: (Object | null)[]): boolean;
}