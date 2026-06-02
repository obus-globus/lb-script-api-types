import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ParseState } from '../../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { SuggestionSupplier } from '../../../../../../net/minecraft/util/parsing/packrat/SuggestionSupplier.d.ts'
export interface ResourceSuggestion extends Object, SuggestionSupplier<StringReader>{
    possibleResources(): Stream<Identifier>;
    possibleValues(state: ParseState<StringReader>): Stream<string>;
}