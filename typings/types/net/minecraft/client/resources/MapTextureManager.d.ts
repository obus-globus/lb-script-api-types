import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TextureManager } from '../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { MapTextureManager$MapInstance } from '../../../../net/minecraft/client/resources/MapTextureManager$MapInstance.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { MapId } from '../../../../net/minecraft/world/level/saveddata/maps/MapId.d.ts'
import type { MapItemSavedData } from '../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData.d.ts'
import type { MapAtlasTexture } from '../../../../net/raphimc/immediatelyfast/feature/map_atlas_generation/MapAtlasTexture.d.ts'
import type { IMapTextureManager } from '../../../../net/raphimc/immediatelyfast/injection/interfaces/IMapTextureManager.d.ts'
export class MapTextureManager extends Object implements AutoCloseable, IMapTextureManager {
    constructor(textureManager: TextureManager)
    // private immediatelyFast$mapAtlasTextures: Int2ObjectMap<Object>;
    // private immediatelyFast$mapIdToAtlasMapping: Int2IntMap;
    // private maps: Int2ObjectMap<MapTextureManager$MapInstance>;
    // private textureManager: TextureManager;
    close(): void;
    // private getOrCreateMapInstance(id: MapId, data: MapItemSavedData): MapTextureManager$MapInstance;
    immediatelyFast$getAllMapAtlasTextures(): E[];
    immediatelyFast$getAtlasMapping(arg0: number): number;
    immediatelyFast$getMapAtlasTexture(arg0: number): MapAtlasTexture;
    prepareMapTexture(id: MapId, data: MapItemSavedData): Identifier;
    resetData(): void;
    update(id: MapId, data: MapItemSavedData): void;
}