import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Position } from '../../../../net/minecraft/core/Position.d.ts'
import type { Projectile } from '../../../../net/minecraft/world/entity/projectile/Projectile.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ProjectileItem$DispenseConfig } from '../../../../net/minecraft/world/item/ProjectileItem$DispenseConfig.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export interface ProjectileItem extends Object{
    asProjectile(level: Level, position: Position, itemStack: ItemStack, direction: Direction): Projectile;
    createDispenseConfig(): ProjectileItem$DispenseConfig;
    shoot(projectile: Projectile, xd: number, yd: number, zd: number, pow: number, uncertainty: number): void;
}