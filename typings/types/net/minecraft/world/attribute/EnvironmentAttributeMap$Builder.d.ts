import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { EnvironmentAttributeMap } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeMap.d.ts'
import type { EnvironmentAttributeMap$Entry } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeMap$Entry.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/attribute/modifier/AttributeModifier.d.ts'
export class EnvironmentAttributeMap$Builder extends Object {
    private constructor()
    // private entries: Map<EnvironmentAttribute<Object>, EnvironmentAttributeMap$Entry<Object, Object>>;
    build(): EnvironmentAttributeMap;
    modify<Parameter extends Object | number | string | boolean>(attribute: EnvironmentAttribute<Value>, modifier: AttributeModifier<Value, Parameter>, value: Parameter): EnvironmentAttributeMap$Builder;
    putAll(map: EnvironmentAttributeMap): EnvironmentAttributeMap$Builder;
    set<Value extends Object | number | string | boolean>(attribute: EnvironmentAttribute<Value>, value: Value): EnvironmentAttributeMap$Builder;
}