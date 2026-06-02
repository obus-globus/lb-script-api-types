import type { GlyphProvider } from '../../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { GlyphProvider$Conditional } from '../../../../../com/mojang/blaze3d/font/GlyphProvider$Conditional.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FontManager$BuilderId } from '../../../../../net/minecraft/client/gui/font/FontManager$BuilderId.d.ts'
import type { FontOption$Filter } from '../../../../../net/minecraft/client/gui/font/FontOption$Filter.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class FontManager$BuilderResult extends Record {
    private constructor(id: FontManager$BuilderId, filter: FontOption$Filter, result: Either<CompletableFuture<Optional<GlyphProvider>>, Identifier>)
    // private filter: FontOption$Filter;
    // private id: FontManager$BuilderId;
    // private result: Either<CompletableFuture<Optional<GlyphProvider>>, Identifier>;
    equals(o: Object | null): boolean;
    filter(): FontOption$Filter;
    hashCode(): number;
    id(): FontManager$BuilderId;
    // private mergeFilters(original: GlyphProvider$Conditional): GlyphProvider$Conditional;
    resolve(resolver: (param0: Identifier) => GlyphProvider$Conditional[]): Optional<GlyphProvider$Conditional[]>;
    result(): Either<CompletableFuture<Optional<GlyphProvider>>, Identifier>;
    toString(): string;
}