import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { BiFunction } from '../../../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ApiProviderMap } from '../../../../../../net/fabricmc/fabric/api/lookup/v1/custom/ApiProviderMap.d.ts'
import type { EntityApiLookup } from '../../../../../../net/fabricmc/fabric/api/lookup/v1/entity/EntityApiLookup.d.ts'
import type { EntityApiLookup$EntityApiProvider } from '../../../../../../net/fabricmc/fabric/api/lookup/v1/entity/EntityApiLookup$EntityApiProvider.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
export class EntityApiLookupImpl<A extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object implements EntityApiLookup<A, C> {
    static checkSelfImplementingTypes(paramarg0: MinecraftServer): void;
    static get(paramarg0: Identifier, paramarg1: Class<Object>, paramarg2: Class<Object>): EntityApiLookup<Object, Object>;
    static get(paramarg0: Identifier, paramarg1: Class<Object>, paramarg2: Class<Object>): EntityApiLookup<Object, Object>;
    private constructor(arg0: Identifier, arg1: Class<A>, arg2: Class<C>)
    // private apiClass: Class<A>;
    // private contextClass: Class<C>;
    // private fallbackProviders: EntityApiLookup$EntityApiProvider<A, C>[];
    // private identifier: Identifier;
    // private providerMap: ApiProviderMap<EntityType<Object>, EntityApiLookup$EntityApiProvider<A, C>>;
    apiClass(): Class<A>;
    contextClass(): Class<C>;
    find(arg0: Entity, arg1: C): A;
    getId(): Identifier;
    getProvider(arg0: EntityType<Object>): EntityApiLookup$EntityApiProvider<A, C>;
    registerFallback(arg0: EntityApiLookup$EntityApiProvider<A, C>): void;
    registerForType<T extends Entity>(arg0: (param0: T, param1: C) => A, arg1: EntityType<T>): void;
    registerForTypes(arg0: EntityApiLookup$EntityApiProvider<A, C>, arg1: EntityType<Object>[]): void;
    registerSelf(arg0: EntityType<Object>[]): void;
}