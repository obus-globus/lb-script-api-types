import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SharedSuggestionProvider$ElementSuggestionType extends Enum<SharedSuggestionProvider$ElementSuggestionType> {
    static ALL: SharedSuggestionProvider$ElementSuggestionType;
    static ELEMENTS: SharedSuggestionProvider$ElementSuggestionType;
    static TAGS: SharedSuggestionProvider$ElementSuggestionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SharedSuggestionProvider$ElementSuggestionType;
    static values(): SharedSuggestionProvider$ElementSuggestionType[];
    private constructor()
    shouldSuggestElements(): boolean;
    shouldSuggestTags(): boolean;
    name(): "TAGS" | "ELEMENTS" | "ALL";
}