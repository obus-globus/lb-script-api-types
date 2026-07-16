import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryAttribute } from '../../../../../../net/fabricmc/fabric/api/event/registry/RegistryAttribute.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
export class FabricRegistryBuilder<T extends unknown, R extends T[]> extends Object {
    static create<T extends unknown>(paramarg0: Class<T>, paramarg1: Identifier): FabricRegistryBuilder<T, T[]>;
    static create<T extends unknown>(paramarg0: ResourceKey<T[]>): FabricRegistryBuilder<T, T[]>;
    static createDefaulted<T extends unknown>(paramarg0: Class<T>, paramarg1: Identifier, paramarg2: Identifier): FabricRegistryBuilder<T, T[]>;
    static createDefaulted<T extends unknown>(paramarg0: ResourceKey<T[]>, paramarg1: Identifier): FabricRegistryBuilder<T, T[]>;
    static from<T extends unknown, R extends T[]>(paramarg0: R): FabricRegistryBuilder<T, R>;
    private constructor(arg0: R)
    // private attributes: RegistryAttribute[];
    // private registry: R;
    attribute(arg0: RegistryAttribute): FabricRegistryBuilder<T, R>;
    buildAndRegister(): R;
}