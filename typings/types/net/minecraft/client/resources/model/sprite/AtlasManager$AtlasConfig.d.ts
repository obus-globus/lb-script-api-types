import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MetadataSectionType } from '../../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
export class AtlasManager$AtlasConfig extends Record {
    constructor(textureId: Identifier, definitionLocation: Identifier, createMipmaps: boolean)
    constructor(textureId: Identifier, definitionLocation: Identifier, createMipmaps: boolean, additionalMetadata: MetadataSectionType<Object>[])
    // private additionalMetadata: MetadataSectionType<Object>[];
    // private createMipmaps: boolean;
    // private definitionLocation: Identifier;
    // private textureId: Identifier;
    additionalMetadata(): MetadataSectionType<Object>[];
    createMipmaps(): boolean;
    definitionLocation(): Identifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    textureId(): Identifier;
    toString(): string;
}