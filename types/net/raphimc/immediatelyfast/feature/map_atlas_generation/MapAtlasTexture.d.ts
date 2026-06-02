import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DynamicTexture } from '../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class MapAtlasTexture extends Object implements AutoCloseable {
    static ATLAS_SIZE: number;
    static MAPS_PER_ATLAS: number;
    static MAP_SIZE: number;
    constructor(arg0: number)
    readonly id: number;
    readonly mapCount: number;
    readonly texture: DynamicTexture;
    readonly textureId: Identifier;
    close(): void;
    getId(): number;
    getMapCount(): number;
    getNextMapLocation(): number;
    getTexture(): DynamicTexture;
    getTextureId(): Identifier;
}