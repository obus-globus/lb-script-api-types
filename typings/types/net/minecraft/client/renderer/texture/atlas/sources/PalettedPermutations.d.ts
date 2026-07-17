import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SpriteSource } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource.d.ts'
import type { SpriteSource$Output } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource$Output.d.ts'
import type { FileToIdConverter } from '../../../../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class PalettedPermutations extends Record implements SpriteSource {
    static DEFAULT_SEPARATOR: string;
    static MAP_CODEC: MapCodec<PalettedPermutations>;
    static TEXTURE_ID_CONVERTER: FileToIdConverter;
    constructor(textures: Identifier[], paletteKey: Identifier, permutations: JavaMap<string, Identifier>)
    constructor(textures: Identifier[], paletteKey: Identifier, permutations: JavaMap<string, Identifier>, separator: string)
    // private paletteKey: Identifier;
    // private permutations: JavaMap<string, Identifier>;
    // private separator: string;
    // private textures: Identifier[];
    codec(): MapCodec<PalettedPermutations>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    paletteKey(): Identifier;
    permutations(): JavaMap<string, Identifier>;
    run(resourceManager: ResourceManager, output: SpriteSource$Output): void;
    separator(): string;
    textures(): Identifier[];
    toString(): string;
}