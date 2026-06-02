import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { EnvironmentAttributeLayer } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeLayer.d.ts'
import type { EnvironmentAttributeLayer$Constant } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeLayer$Constant.d.ts'
import type { EnvironmentAttributeLayer$Positional } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeLayer$Positional.d.ts'
import type { EnvironmentAttributeLayer$TimeBased } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeLayer$TimeBased.d.ts'
import type { EnvironmentAttributeMap } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeMap.d.ts'
import type { EnvironmentAttributeSystem } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeSystem.d.ts'
import type { ClockManager } from '../../../../net/minecraft/world/clock/ClockManager.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Timeline } from '../../../../net/minecraft/world/timeline/Timeline.d.ts'
export class EnvironmentAttributeSystem$Builder extends Object {
    private constructor()
    // private layersByAttribute: Map<EnvironmentAttribute<Object>, EnvironmentAttributeLayer<Object>[]>;
    // private addConstantEntry(attribute: EnvironmentAttribute<Value>, attributeMap: EnvironmentAttributeMap): EnvironmentAttributeSystem$Builder;
    addConstantLayer(attribute: EnvironmentAttribute<Value>, layer: (param0: Value) => unknown): EnvironmentAttributeSystem$Builder;
    addConstantLayer(attributeMap: EnvironmentAttributeMap): EnvironmentAttributeSystem$Builder;
    addDefaultLayers(level: Level): EnvironmentAttributeSystem$Builder;
    // private addLayer(attribute: EnvironmentAttribute<Value>, layer: EnvironmentAttributeLayer<Value>): EnvironmentAttributeSystem$Builder;
    addPositionalLayer(attribute: EnvironmentAttribute<Value>, layer: (param0: Value, param1: Object | null, param2: Vec3) => unknown): EnvironmentAttributeSystem$Builder;
    addTimeBasedLayer(attribute: EnvironmentAttribute<Value>, layer: (param0: Value, param1: Object | null) => unknown): EnvironmentAttributeSystem$Builder;
    addTimelineLayer(timeline: Holder<Timeline>, clockManager: ClockManager): EnvironmentAttributeSystem$Builder;
    // private addTimelineLayerForAttribute(timeline: Holder<Timeline>, attribute: EnvironmentAttribute<Value>, clockManager: ClockManager): void;
    build(): EnvironmentAttributeSystem;
}