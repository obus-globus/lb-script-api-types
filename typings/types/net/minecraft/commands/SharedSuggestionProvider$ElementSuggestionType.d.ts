import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SharedSuggestionProvider$ElementSuggestionType extends Enum<SharedSuggestionProvider$ElementSuggestionType> {
    static ALL: SharedSuggestionProvider$ElementSuggestionType;
    static ELEMENTS: SharedSuggestionProvider$ElementSuggestionType;
    static TAGS: SharedSuggestionProvider$ElementSuggestionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SharedSuggestionProvider$ElementSuggestionType;
    static values(): (Object | null)[];
    private constructor()
    shouldSuggestElements(): boolean;
    shouldSuggestTags(): boolean;
    name(): "TAGS" | "ELEMENTS" | "ALL";
}