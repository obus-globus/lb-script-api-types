import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export interface EntityApiLookup$EntityApiProvider<A extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object{
    find(arg0: Entity, arg1: C): A;
}