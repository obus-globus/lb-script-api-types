import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Batchifier } from '../../../../../ai/djl/translate/Batchifier.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class QATranslator$BaseBuilder<T extends QATranslator$BaseBuilder<QATranslator$BaseBuilder<any>>> extends Object {
    constructor()
    // private batchifier: Batchifier;
    // private includeTokenTypes: boolean;
    // private locale: Locale;
    // private maxLabels: number;
    // private maxLength: number;
    // private padding: boolean;
    // private toLowerCase: boolean;
    // private tokenizerName: string;
    // private truncation: boolean;
    // private vocab: string;
    configure(arg0: JavaMap<string, Object | null>): void;
    optBatchifier(arg0: Batchifier): T;
    optIncludeTokenTypes(arg0: boolean): T;
    optLocale(arg0: string): T;
    optMaxLabels(arg0: number): T;
    optMaxLength(arg0: number): T;
    optPadding(arg0: boolean): T;
    optToLowerCase(arg0: boolean): T;
    optTokenizer(arg0: string): T;
    optTruncation(arg0: boolean): T;
    optVocab(arg0: string): T;
    self(): T;
}