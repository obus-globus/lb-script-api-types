import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SpriteSource } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource.d.ts'
import type { SpriteSource$Output } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource$Output.d.ts'
import type { FileToIdConverter } from '../../../../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class SingleFile extends Record implements SpriteSource {
    static MAP_CODEC: MapCodec<SingleFile>;
    static TEXTURE_ID_CONVERTER: FileToIdConverter;
    constructor(resourceId: Identifier)
    constructor(resourceId: Identifier, spriteId: Optional<Identifier>)
    // private resourceId: Identifier;
    // private spriteId: Optional<Identifier>;
    codec(): MapCodec<SingleFile>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    resourceId(): Identifier;
    run(resourceManager: ResourceManager, output: SpriteSource$Output): void;
    spriteId(): Optional<Identifier>;
    toString(): string;
}