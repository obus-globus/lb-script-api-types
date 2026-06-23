import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiFunction } from '../../../../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntityApiLookup$EntityApiProvider } from '../../../../../../../net/fabricmc/fabric/api/lookup/v1/entity/EntityApiLookup$EntityApiProvider.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
export interface EntityApiLookup<A extends unknown, C extends unknown> extends Object {
    apiClass(): Class<A>;
    contextClass(): Class<C>;
    find(arg0: Entity, arg1: C): A;
    getId(): Identifier;
    getProvider(arg0: EntityType<any>): EntityApiLookup$EntityApiProvider<A, C>;
    registerFallback(arg0: EntityApiLookup$EntityApiProvider<A, C>): void;
    registerForType<T extends Entity>(arg0: (param0: T, param1: C) => A, arg1: EntityType<T>): void;
    registerForTypes(arg0: EntityApiLookup$EntityApiProvider<A, C>, arg1: EntityType<any>[]): void;
    registerSelf(arg0: EntityType<any>[]): void;
}