import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SpriteSource } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource.d.ts'
import type { SpriteSource$Output } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource$Output.d.ts'
import type { FileToIdConverter } from '../../../../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { ResourceManager } from '../../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class DirectoryLister extends Record implements SpriteSource {
    static MAP_CODEC: MapCodec<DirectoryLister>;
    static TEXTURE_ID_CONVERTER: FileToIdConverter;
    constructor(sourcePath: string, idPrefix: string)
    // private idPrefix: string;
    // private sourcePath: string;
    codec(): MapCodec<DirectoryLister>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    idPrefix(): string;
    run(resourceManager: ResourceManager, output: SpriteSource$Output): void;
    sourcePath(): string;
    toString(): string;
}