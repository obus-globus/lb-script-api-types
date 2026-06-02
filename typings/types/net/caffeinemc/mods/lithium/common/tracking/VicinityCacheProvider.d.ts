import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VicinityCache } from '../../../../../../net/caffeinemc/mods/lithium/common/tracking/VicinityCache.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
export interface VicinityCacheProvider extends Object{
    getUpdatedVicinityCache(arg0: Entity): VicinityCache;
    lithium$getVicinityCache(): VicinityCache;
}