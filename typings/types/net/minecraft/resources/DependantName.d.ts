import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export interface DependantName<T extends unknown, V extends unknown> extends Object{
    get(id: ResourceKey<T>): V;
}