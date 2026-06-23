import type { Batchifier } from '../../../../ai/djl/translate/Batchifier.d.ts'
import type { NoBatchifyTranslator } from '../../../../ai/djl/translate/NoBatchifyTranslator.d.ts'
import type { TranslatorContext } from '../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PassthroughTranslator<I extends unknown, O extends unknown> extends Object implements NoBatchifyTranslator<I, O> {
    constructor()
    getBatchifier(): Batchifier;
    processInput(arg0: TranslatorContext, arg1: I): (Object | null)[];
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): O;
}