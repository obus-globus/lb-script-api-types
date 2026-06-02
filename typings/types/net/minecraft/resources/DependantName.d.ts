import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export interface DependantName<T extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    get(id: ResourceKey<T>): V;
}