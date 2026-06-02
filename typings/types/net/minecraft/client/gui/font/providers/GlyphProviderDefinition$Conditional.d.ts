import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FontOption$Filter } from '../../../../../../net/minecraft/client/gui/font/FontOption$Filter.d.ts'
import type { GlyphProviderDefinition } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition.d.ts'
export class GlyphProviderDefinition$Conditional extends Record {
    static CODEC: Codec<GlyphProviderDefinition$Conditional>;
    constructor(definition: GlyphProviderDefinition, filter: FontOption$Filter)
    // private definition: GlyphProviderDefinition;
    // private filter: FontOption$Filter;
    definition(): GlyphProviderDefinition;
    equals(o: Object | null): boolean;
    filter(): FontOption$Filter;
    hashCode(): number;
    toString(): string;
}