import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiomeModificationContext$AttributesContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext$AttributesContext.d.ts'
import type { EnvironmentAttribute } from '../../../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { EnvironmentAttributeMap } from '../../../../../../net/minecraft/world/attribute/EnvironmentAttributeMap.d.ts'
import type { EnvironmentAttributeMap$Builder } from '../../../../../../net/minecraft/world/attribute/EnvironmentAttributeMap$Builder.d.ts'
import type { AttributeModifier } from '../../../../../../net/minecraft/world/attribute/modifier/AttributeModifier.d.ts'
export class BiomeModificationContextImpl$AttributesContextImpl extends Object implements BiomeModificationContext$AttributesContext {
    private constructor(null_: BiomeModificationContextImpl$AttributesContextImpl)
    addAll(arg0: EnvironmentAttributeMap$Builder): void;
    addAll(arg0: EnvironmentAttributeMap): void;
    set<T extends unknown>(arg0: EnvironmentAttribute<T>, arg1: T): void;
    setModifier<T extends unknown, M extends unknown>(arg0: EnvironmentAttribute<T>, arg1: AttributeModifier<T, M>, arg2: M): void;
}