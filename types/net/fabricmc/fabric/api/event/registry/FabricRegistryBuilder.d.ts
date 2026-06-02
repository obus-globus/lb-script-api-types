import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryAttribute } from '../../../../../../net/fabricmc/fabric/api/event/registry/RegistryAttribute.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
export class FabricRegistryBuilder<T extends Object | number | string | boolean, R extends T[]> extends Object {
    static create(paramarg0: Class<Object>, paramarg1: Identifier): FabricRegistryBuilder<Object, Object>;
    static create(paramarg0: ResourceKey<Object>): FabricRegistryBuilder<Object, Object>;
    static createDefaulted(paramarg0: Class<Object>, paramarg1: Identifier, paramarg2: Identifier): FabricRegistryBuilder<Object, Object>;
    static createDefaulted(paramarg0: ResourceKey<Object>, paramarg1: Identifier): FabricRegistryBuilder<Object, Object>;
    static from(paramarg0: Object | null): FabricRegistryBuilder<Object, Object>;
    private constructor(arg0: R)
    // private attributes: RegistryAttribute[];
    // private registry: R;
    attribute(arg0: RegistryAttribute): FabricRegistryBuilder<T, R>;
    buildAndRegister(): R;
}