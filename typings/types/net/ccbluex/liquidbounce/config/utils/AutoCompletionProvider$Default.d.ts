import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { AutoCompletionProvider } from '../../../../../net/ccbluex/liquidbounce/config/utils/AutoCompletionProvider.d.ts'
export class AutoCompletionProvider$Default extends Object implements AutoCompletionProvider {
    static Default: AutoCompletionProvider$Default;
    static booleanCompleter: AutoCompletionProvider;
    static choiceListCompleter: AutoCompletionProvider;
    static modeGroupCompleter: AutoCompletionProvider;
    static multiChoiceCompleter: AutoCompletionProvider;
    static rangedCompleter: AutoCompletionProvider;
    static ofConst(paramarg0: string[]): AutoCompletionProvider;
    booleanCompleter: AutoCompletionProvider;
    choiceListCompleter: AutoCompletionProvider;
    modeGroupCompleter: AutoCompletionProvider;
    multiChoiceCompleter: AutoCompletionProvider;
    rangedCompleter: AutoCompletionProvider;
    ofConst(strings: string[]): AutoCompletionProvider;
    possible(value: Value<Object>): string[];
}