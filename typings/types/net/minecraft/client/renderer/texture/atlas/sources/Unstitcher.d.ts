import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SpriteSource } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource.d.ts'
import type { SpriteSource$Output } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource$Output.d.ts'
import type { Unstitcher$Region } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/sources/Unstitcher$Region.d.ts'
import type { FileToIdConverter } from '../../../../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class Unstitcher extends Record implements SpriteSource {
    static MAP_CODEC: MapCodec<Unstitcher>;
    static TEXTURE_ID_CONVERTER: FileToIdConverter;
    // private regions: Unstitcher$Region[];
    // private resource: Identifier;
    // private xDivisor: number;
    // private yDivisor: number;
    codec(): MapCodec<Unstitcher>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    regions(): Unstitcher$Region[];
    resource(): Identifier;
    run(resourceManager: ResourceManager, output: SpriteSource$Output): void;
    toString(): string;
    xDivisor(): number;
    yDivisor(): number;
}