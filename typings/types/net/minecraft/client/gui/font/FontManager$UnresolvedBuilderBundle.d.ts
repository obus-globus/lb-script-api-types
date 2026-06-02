import type { GlyphProvider } from '../../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { GlyphProvider$Conditional } from '../../../../../com/mojang/blaze3d/font/GlyphProvider$Conditional.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FontManager$BuilderId } from '../../../../../net/minecraft/client/gui/font/FontManager$BuilderId.d.ts'
import type { FontManager$BuilderResult } from '../../../../../net/minecraft/client/gui/font/FontManager$BuilderResult.d.ts'
import type { FontOption$Filter } from '../../../../../net/minecraft/client/gui/font/FontOption$Filter.d.ts'
import type { GlyphProviderDefinition$Reference } from '../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition$Reference.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { DependencySorter$Entry } from '../../../../../net/minecraft/util/DependencySorter$Entry.d.ts'
export class FontManager$UnresolvedBuilderBundle extends Record implements DependencySorter$Entry<Identifier> {
    constructor(fontId: Identifier)
    private constructor(fontId: Identifier, builders: FontManager$BuilderResult[], dependencies: Identifier[])
    // private builders: FontManager$BuilderResult[];
    // private dependencies: Identifier[];
    // private fontId: Identifier;
    add(builderId: FontManager$BuilderId, filter: FontOption$Filter, provider: CompletableFuture<Optional<GlyphProvider>>): void;
    add(builderId: FontManager$BuilderId, filter: FontOption$Filter, reference: GlyphProviderDefinition$Reference): void;
    builders(): FontManager$BuilderResult[];
    dependencies(): Identifier[];
    equals(o: Object | null): boolean;
    fontId(): Identifier;
    hashCode(): number;
    // private listBuilders(): Stream<CompletableFuture<Optional<GlyphProvider>>>;
    resolve(resolver: (param0: Identifier) => GlyphProvider$Conditional[]): Optional<GlyphProvider$Conditional[]>;
    toString(): string;
    visitOptionalDependencies(output: (param0: Identifier) => void): void;
    visitRequiredDependencies(output: (param0: Identifier) => void): void;
}