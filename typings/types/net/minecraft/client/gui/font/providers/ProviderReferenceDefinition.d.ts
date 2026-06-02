import type { Either } from '../../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphProviderDefinition } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition.d.ts'
import type { GlyphProviderDefinition$Loader } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition$Loader.d.ts'
import type { GlyphProviderDefinition$Reference } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition$Reference.d.ts'
import type { GlyphProviderType } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderType.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ProviderReferenceDefinition extends Record implements GlyphProviderDefinition {
    static CODEC: MapCodec<ProviderReferenceDefinition>;
    static MAP_CODEC: MapCodec<GlyphProviderDefinition>;
    constructor(id: Identifier)
    // private id: Identifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
    type(): GlyphProviderType;
    unpack(): Either<GlyphProviderDefinition$Loader, GlyphProviderDefinition$Reference>;
}