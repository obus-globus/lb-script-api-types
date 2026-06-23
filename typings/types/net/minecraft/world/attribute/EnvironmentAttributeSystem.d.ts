import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { EnvironmentAttributeLayer } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeLayer.d.ts'
import type { EnvironmentAttributeReader } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeReader.d.ts'
import type { EnvironmentAttributeSystem$Builder } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeSystem$Builder.d.ts'
import type { EnvironmentAttributeSystem$ValueSampler } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeSystem$ValueSampler.d.ts'
import type { SpatialAttributeInterpolator } from '../../../../net/minecraft/world/attribute/SpatialAttributeInterpolator.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EnvironmentAttributeSystem extends Object implements EnvironmentAttributeReader {
    static EMPTY: EnvironmentAttributeReader;
    static builder(): EnvironmentAttributeSystem$Builder;
    private constructor(layersByAttribute: Map<EnvironmentAttribute<Object>, EnvironmentAttributeLayer<Object>[]>)
    // private attributeSamplers: Map<EnvironmentAttribute<Object>, EnvironmentAttributeSystem$ValueSampler<Object>>;
    // private bakeLayerSampler<Value extends unknown>(attribute: EnvironmentAttribute<Value>, untypedLayers: EnvironmentAttributeLayer<Object>[]): EnvironmentAttributeSystem$ValueSampler<Value>;
    getConstantBaseValue<Value extends unknown>(attribute: EnvironmentAttribute<Value>): Value;
    getDimensionValue<Value extends unknown>(attribute: EnvironmentAttribute<Value>): Value;
    getValue<Value extends unknown>(attribute: EnvironmentAttribute<Value>, pos: BlockPos): Value;
    getValue<Value extends unknown>(attribute: EnvironmentAttribute<Value>, pos: Vec3): Value;
    getValue<Value extends unknown>(context: LootContext, attribute: EnvironmentAttribute<Value>): Value;
    getValue<Value extends unknown>(attribute: EnvironmentAttribute<Value>, pos: Vec3, biomeInterpolator: SpatialAttributeInterpolator): Value;
    // private getValueSampler<Value extends unknown>(attribute: EnvironmentAttribute<Value>): EnvironmentAttributeSystem$ValueSampler<Value>;
    invalidateTickCache(): void;
    isAffectedByPosition(attribute: EnvironmentAttribute<Object>): boolean;
}