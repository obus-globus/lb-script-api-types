import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BoundingBox2f } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/BoundingBox2f.d.ts'
import type { Vector2i } from '../../../../../../../../org/joml/Vector2i.d.ts'
export class MinimapTextureAtlasManager$AtlasPosition extends Record {
    constructor(x: number, y: number)
    /*not mapped: */ baseXOnAtlas(): number;
    /*not mapped: */ baseYOnAtlas(): number;
    /*not mapped: */ uv(): BoundingBox2f;
    // private x: number;
    // private y: number;
    // private component1(): number;
    // private component2(): number;
    copy(x: number, y: number): MinimapTextureAtlasManager$AtlasPosition;
    equals(other: Object | null): boolean;
    /**
     * @param chunkX x coordinate in the chunk (0-15)
     * @param chunkY y coordinate in the chunk (0-15)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapTextureAtlasManager.kt#L199 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapTextureAtlasManager.kt:199}
     */
    getPosOnAtlas(chunkX: number, chunkY: number): Vector2i;
    hashCode(): number;
    toString(): string;
}