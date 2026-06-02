import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MapAtlasTexture } from '../../../../../net/raphimc/immediatelyfast/feature/map_atlas_generation/MapAtlasTexture.d.ts'
export interface IMapTextureManager extends Object{
    immediatelyFast$getAllMapAtlasTextures(): E[];
    immediatelyFast$getAtlasMapping(arg0: number): number;
    immediatelyFast$getMapAtlasTexture(arg0: number): MapAtlasTexture;
}