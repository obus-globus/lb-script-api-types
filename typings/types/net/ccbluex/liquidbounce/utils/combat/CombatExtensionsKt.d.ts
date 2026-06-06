import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { SwingMode } from '../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class CombatExtensionsKt extends Object {
    /**
     * @see net.minecraft.client.Minecraft.startAttack
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatExtensions.kt#L239 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatExtensions.kt:239}
     */
    static attackEntity(entity: Entity, swing: SwingMode, keepSprint: boolean): void;
    static findEnemies(paramarg0: ClientLevel, paramarg1: number, paramarg2: number): (Object | null)[];
    static findEnemies(clientLevel: ClientLevel, minRange: number, maxRange: number, enemyConf: (Object | null)[]): (Object | null)[];
    /**
     * Find the best enemy in the current world in a specific range.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatExtensions.kt#L185 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatExtensions.kt:185}
     */
    static findEnemy(clientLevel: ClientLevel, range: number, enemyConf: number): Entity;
    static findEnemy(clientLevel: ClientLevel, minRange: number, maxRange: number, enemyConf: (Object | null)[]): Entity;
    static findEnemy(paramarg0: ClientLevel, paramarg1: ClosedFloatingPointRange<number>): Entity;
    static findEnemy(clientLevel: ClientLevel, range: ClosedFloatingPointRange<number>, enemyConf: (Object | null)[]): Entity;
    static getEntitiesBoxInRange(clientLevel: ClientLevel, midPos: Vec3, range: number, predicate: (param0: Object | null) => boolean): Entity[];
    static shouldBeAttacked(enemyConf: Entity): boolean;
    static shouldBeAttacked(paramarg0: Entity, paramarg1: (Object | null)[]): boolean;
    static shouldBeShown(enemyConf: Entity): boolean;
    static shouldBeShown(paramarg0: Entity, paramarg1: (Object | null)[]): boolean;
}