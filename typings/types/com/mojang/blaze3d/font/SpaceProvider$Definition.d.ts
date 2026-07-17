import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GlyphProviderDefinition } from '../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition.d.ts'
import type { GlyphProviderDefinition$Loader } from '../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition$Loader.d.ts'
import type { GlyphProviderDefinition$Reference } from '../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition$Reference.d.ts'
import type { GlyphProviderType } from '../../../../net/minecraft/client/gui/font/providers/GlyphProviderType.d.ts'
export class SpaceProvider$Definition extends Record implements GlyphProviderDefinition {
    static CODEC: MapCodec<SpaceProvider$Definition>;
    static MAP_CODEC: MapCodec<GlyphProviderDefinition>;
    constructor(advances: JavaMap<number, number>)
    // private advances: JavaMap<number, number>;
    advances(): JavaMap<number, number>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): GlyphProviderType;
    unpack(): Either<GlyphProviderDefinition$Loader, GlyphProviderDefinition$Reference>;
}