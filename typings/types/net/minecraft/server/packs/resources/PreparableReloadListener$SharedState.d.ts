import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PreparableReloadListener$StateKey } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$StateKey.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class PreparableReloadListener$SharedState extends Object {
    constructor(manager: ResourceManager)
    // private manager: ResourceManager;
    // private state: Map<PreparableReloadListener$StateKey<Object>, Object>;
    get<T extends Object | number | string | boolean>(key: PreparableReloadListener$StateKey<T>): T;
    resourceManager(): ResourceManager;
    set<T extends Object | number | string | boolean>(key: PreparableReloadListener$StateKey<T>, value: T): void;
}