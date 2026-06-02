import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModPackResources } from '../../../../../net/fabricmc/fabric/api/resource/v1/pack/ModPackResources.d.ts'
import type { ModMetadata } from '../../../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
export interface ModResourcePack extends Object, ModPackResources{
    createOverlay(arg0: string): ModResourcePack;
    getFabricModMetadata(): ModMetadata;
}