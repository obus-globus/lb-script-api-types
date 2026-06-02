import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MapAtlasTexture } from '../../../../../net/raphimc/immediatelyfast/feature/map_atlas_generation/MapAtlasTexture.d.ts'
export interface IMapRenderState extends Object{
    immediatelyFast$getAtlasTexture(): MapAtlasTexture;
    immediatelyFast$getAtlasX(): number;
    immediatelyFast$getAtlasY(): number;
    immediatelyFast$setAtlasTexture(arg0: MapAtlasTexture): void;
    immediatelyFast$setAtlasX(arg0: number): void;
    immediatelyFast$setAtlasY(arg0: number): void;
}