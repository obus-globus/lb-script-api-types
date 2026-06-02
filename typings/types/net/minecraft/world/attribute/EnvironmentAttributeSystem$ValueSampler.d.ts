import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { EnvironmentAttributeLayer } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeLayer.d.ts'
import type { SpatialAttributeInterpolator } from '../../../../net/minecraft/world/attribute/SpatialAttributeInterpolator.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EnvironmentAttributeSystem$ValueSampler<Value extends Object | number | string | boolean> extends Object {
    private constructor(attribute: EnvironmentAttribute<Value>, baseValue: Value, layers: EnvironmentAttributeLayer<Value>[], isAffectedByPosition: boolean)
    // private attribute: EnvironmentAttribute<Value>;
    // private baseValue: Value;
    // private cacheTickId: number;
    // private cachedTickValue: Value;
    // private isAffectedByPosition: boolean;
    // private layers: EnvironmentAttributeLayer<Value>[];
    // private computeValueNotPositional(): Value;
    // private computeValuePositional(pos: Vec3, biomeInterpolator: SpatialAttributeInterpolator): Value;
    getDimensionValue(): Value;
    getValue(pos: Vec3, biomeInterpolator: SpatialAttributeInterpolator): Value;
    invalidateTickCache(): void;
}