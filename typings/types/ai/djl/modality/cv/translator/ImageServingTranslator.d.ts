import type { Input } from '../../../../../ai/djl/modality/Input.d.ts'
import type { Output } from '../../../../../ai/djl/modality/Output.d.ts'
import type { Image } from '../../../../../ai/djl/modality/cv/Image.d.ts'
import type { ImageFactory } from '../../../../../ai/djl/modality/cv/ImageFactory.d.ts'
import type { Batchifier } from '../../../../../ai/djl/translate/Batchifier.d.ts'
import type { Translator } from '../../../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { TranslatorOptions } from '../../../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ImageServingTranslator extends Object implements Translator<Input, Output> {
    constructor(arg0: Translator<Image, Object>)
    // private factory: ImageFactory;
    // private translator: Translator<Image, Object>;
    batchProcessInput(arg0: TranslatorContext, arg1: Input[]): (Object | null)[];
    batchProcessOutput(arg0: TranslatorContext, arg1: (Object | null)[]): Output[];
    getBatchifier(): Batchifier;
    getExpansions(): TranslatorOptions;
    prepare(arg0: TranslatorContext): void;
    processInput(arg0: TranslatorContext, arg1: Input): (Object | null)[];
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): Output;
}