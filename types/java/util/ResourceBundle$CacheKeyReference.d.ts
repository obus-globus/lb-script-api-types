import type { ResourceBundle$CacheKey } from '../../java/util/ResourceBundle$CacheKey.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ResourceBundle$CacheKeyReference extends Object{
    getCacheKey(): ResourceBundle$CacheKey;
}