import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { EnvironmentAttributeLayer } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeLayer.d.ts'
import type { EnvironmentAttributeLayer$Constant } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeLayer$Constant.d.ts'
import type { EnvironmentAttributeLayer$Positional } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeLayer$Positional.d.ts'
import type { EnvironmentAttributeLayer$TimeBased } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeLayer$TimeBased.d.ts'
import type { EnvironmentAttributeMap } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeMap.d.ts'
import type { EnvironmentAttributeSystem } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeSystem.d.ts'
import type { SpatialAttributeInterpolator } from '../../../../net/minecraft/world/attribute/SpatialAttributeInterpolator.d.ts'
import type { ClockManager } from '../../../../net/minecraft/world/clock/ClockManager.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Timeline } from '../../../../net/minecraft/world/timeline/Timeline.d.ts'
export class EnvironmentAttributeSystem$Builder extends Object {
    private constructor()
    // private layersByAttribute: Map<EnvironmentAttribute<Object>, EnvironmentAttributeLayer<Object>[]>;
    // private addConstantEntry<Value extends Object | number | string | boolean>(attribute: EnvironmentAttribute<Value>, attributeMap: EnvironmentAttributeMap): EnvironmentAttributeSystem$Builder;
    addConstantLayer<Value extends Object | number | string | boolean>(attribute: EnvironmentAttribute<Value>, layer: (param0: Value) => Value): EnvironmentAttributeSystem$Builder;
    addConstantLayer(attributeMap: EnvironmentAttributeMap): EnvironmentAttributeSystem$Builder;
    addDefaultLayers(level: Level): EnvironmentAttributeSystem$Builder;
    // private addLayer<Value extends Object | number | string | boolean>(attribute: EnvironmentAttribute<Value>, layer: EnvironmentAttributeLayer<Value>): EnvironmentAttributeSystem$Builder;
    addPositionalLayer<Value extends Object | number | string | boolean>(attribute: EnvironmentAttribute<Value>, layer: (param0: Value, param1: Vec3, param2: SpatialAttributeInterpolator) => Value): EnvironmentAttributeSystem$Builder;
    addTimeBasedLayer<Value extends Object | number | string | boolean>(attribute: EnvironmentAttribute<Value>, layer: (param0: Value, param1: number) => Value): EnvironmentAttributeSystem$Builder;
    addTimelineLayer(timeline: Holder<Timeline>, clockManager: ClockManager): EnvironmentAttributeSystem$Builder;
    // private addTimelineLayerForAttribute<Value extends Object | number | string | boolean>(timeline: Holder<Timeline>, attribute: EnvironmentAttribute<Value>, clockManager: ClockManager): void;
    build(): EnvironmentAttributeSystem;
}