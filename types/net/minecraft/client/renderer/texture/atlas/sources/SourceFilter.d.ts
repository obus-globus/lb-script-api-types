import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SpriteSource } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource.d.ts'
import type { SpriteSource$Output } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource$Output.d.ts'
import type { FileToIdConverter } from '../../../../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { ResourceManager } from '../../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { IdentifierPattern } from '../../../../../../../net/minecraft/util/IdentifierPattern.d.ts'
export class SourceFilter extends Record implements SpriteSource {
    static MAP_CODEC: MapCodec<SourceFilter>;
    static TEXTURE_ID_CONVERTER: FileToIdConverter;
    constructor(filter: IdentifierPattern)
    // private filter: IdentifierPattern;
    codec(): MapCodec<SourceFilter>;
    equals(o: Object | null): boolean;
    filter(): IdentifierPattern;
    hashCode(): number;
    run(resourceManager: ResourceManager, output: SpriteSource$Output): void;
    toString(): string;
}