import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DynamicTexture } from '../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { MapItemSavedData } from '../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData.d.ts'
import type { MapAtlasTexture } from '../../../../net/raphimc/immediatelyfast/feature/map_atlas_generation/MapAtlasTexture.d.ts'
export class MapTextureManager$MapInstance extends Object implements AutoCloseable {
    private constructor(null_: MapTextureManager$MapInstance, id: number, data: MapItemSavedData)
    // private data: MapItemSavedData;
    // private immediatelyFast$atlasTexture: MapAtlasTexture;
    // private immediatelyFast$atlasX: number;
    // private immediatelyFast$atlasY: number;
    // private location: Identifier;
    // private requiresUpload: boolean;
    // private texture: DynamicTexture;
    close(): void;
    forceUpload(): void;
    // private replaceMapData(data: MapItemSavedData): void;
    // private updateTextureIfNeeded(): void;
}