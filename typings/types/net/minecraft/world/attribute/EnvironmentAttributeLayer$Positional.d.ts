import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EnvironmentAttributeLayer } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeLayer.d.ts'
import type { SpatialAttributeInterpolator } from '../../../../net/minecraft/world/attribute/SpatialAttributeInterpolator.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface EnvironmentAttributeLayer$Positional<Value extends unknown> extends Object, EnvironmentAttributeLayer<Value>{
    applyPositional(baseValue: Value, pos: Vec3, biomeInterpolator: SpatialAttributeInterpolator): Value;
}