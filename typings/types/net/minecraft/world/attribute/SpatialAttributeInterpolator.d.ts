import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { EnvironmentAttributeMap } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeMap.d.ts'
export class SpatialAttributeInterpolator extends Object {
    constructor()
    // private weightsBySource: JavaMap<any, any>;
    accumulate(weight: number, attributes: EnvironmentAttributeMap): SpatialAttributeInterpolator;
    applyAttributeLayer<Value extends unknown>(attribute: EnvironmentAttribute<Value>, baseValue: Value): Value;
    clear(): void;
}