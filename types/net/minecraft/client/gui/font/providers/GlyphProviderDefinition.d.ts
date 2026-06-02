import type { Either } from '../../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphProviderDefinition$Loader } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition$Loader.d.ts'
import type { GlyphProviderDefinition$Reference } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition$Reference.d.ts'
import type { GlyphProviderType } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderType.d.ts'
export interface GlyphProviderDefinition extends Object{
    type(): GlyphProviderType;
    unpack(): Either<GlyphProviderDefinition$Loader, GlyphProviderDefinition$Reference>;
}