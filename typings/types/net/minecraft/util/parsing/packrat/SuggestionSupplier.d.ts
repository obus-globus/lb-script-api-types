import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParseState } from '../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
export interface SuggestionSupplier<S extends unknown> extends Object{
    possibleValues(state: ParseState<S>): Stream<string>;
}