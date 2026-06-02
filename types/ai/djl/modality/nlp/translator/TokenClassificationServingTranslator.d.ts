import type { Input } from '../../../../../ai/djl/modality/Input.d.ts'
import type { Output } from '../../../../../ai/djl/modality/Output.d.ts'
import type { NamedEntity } from '../../../../../ai/djl/modality/nlp/translator/NamedEntity.d.ts'
import type { Batchifier } from '../../../../../ai/djl/translate/Batchifier.d.ts'
import type { NoBatchifyTranslator } from '../../../../../ai/djl/translate/NoBatchifyTranslator.d.ts'
import type { Translator } from '../../../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TokenClassificationServingTranslator extends Object implements NoBatchifyTranslator<Input, Output> {
    constructor(arg0: Translator<string, NamedEntity[]>)
    // private translator: Translator<string, NamedEntity[]>;
    getBatchifier(): Batchifier;
    prepare(arg0: TranslatorContext): void;
    processInput(arg0: TranslatorContext, arg1: Input): (Object | null)[];
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): Output;
}