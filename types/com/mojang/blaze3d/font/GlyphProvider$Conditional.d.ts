import type { GlyphProvider } from '../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FontOption$Filter } from '../../../../net/minecraft/client/gui/font/FontOption$Filter.d.ts'
export class GlyphProvider$Conditional extends Record implements AutoCloseable {
    constructor(provider: GlyphProvider, filter: FontOption$Filter)
    // private filter: FontOption$Filter;
    // private provider: GlyphProvider;
    close(): void;
    equals(o: Object | null): boolean;
    filter(): FontOption$Filter;
    hashCode(): number;
    provider(): GlyphProvider;
    toString(): string;
}