import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { MapRenderState$MapDecorationRenderState } from '../../../../../net/minecraft/client/renderer/state/MapRenderState$MapDecorationRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MapAtlasTexture } from '../../../../../net/raphimc/immediatelyfast/feature/map_atlas_generation/MapAtlasTexture.d.ts'
import type { IMapRenderState } from '../../../../../net/raphimc/immediatelyfast/injection/interfaces/IMapRenderState.d.ts'
export class MapRenderState extends Object implements FabricRenderState, IMapRenderState {
    constructor()
    decorations: MapRenderState$MapDecorationRenderState[];
    // private immediatelyFast$atlasTexture: MapAtlasTexture;
    // private immediatelyFast$atlasX: number;
    // private immediatelyFast$atlasY: number;
    // private renderStateData: Map<Object | null, Object | null>;
    texture: Identifier;
    clearExtraData(): void;
    getData<T extends unknown>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    immediatelyFast$getAtlasTexture(): MapAtlasTexture;
    immediatelyFast$getAtlasX(): number;
    immediatelyFast$getAtlasY(): number;
    immediatelyFast$setAtlasTexture(arg0: MapAtlasTexture): void;
    immediatelyFast$setAtlasX(arg0: number): void;
    immediatelyFast$setAtlasY(arg0: number): void;
    setData<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
}