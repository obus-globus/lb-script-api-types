import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { SpatialAttributeInterpolator } from '../../../../net/minecraft/world/attribute/SpatialAttributeInterpolator.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface EnvironmentAttributeReader extends Object{
    getDimensionValue<Value extends unknown>(attribute: EnvironmentAttribute<Value>): Value;
    getValue<Value extends unknown>(attribute: EnvironmentAttribute<Value>, pos: BlockPos): Value;
    getValue<Value extends unknown>(attribute: EnvironmentAttribute<Value>, pos: Vec3): Value;
    getValue<Value extends unknown>(attribute: EnvironmentAttribute<Value>, pos: Vec3, biomeInterpolator: SpatialAttributeInterpolator): Value;
    getValue<Value extends unknown>(context: LootContext, attribute: EnvironmentAttribute<Value>): Value;
}