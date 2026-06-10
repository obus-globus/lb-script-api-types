import type { Image } from '../../../../../ai/djl/modality/cv/Image.d.ts'
import type { Image$Flag } from '../../../../../ai/djl/modality/cv/Image$Flag.d.ts'
import type { BaseImageTranslator$BaseBuilder } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$BaseBuilder.d.ts'
import type { Batchifier } from '../../../../../ai/djl/translate/Batchifier.d.ts'
import type { Pipeline } from '../../../../../ai/djl/translate/Pipeline.d.ts'
import type { Translator } from '../../../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { TranslatorOptions } from '../../../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BaseImageTranslator<T extends Object | number | string | boolean> extends Object implements Translator<Image, T> {
    constructor(arg0: BaseImageTranslator$BaseBuilder<Object>)
    readonly batchifier: Batchifier;
    // private flag: Image$Flag;
    // private height: number;
    // private pipeline: Pipeline;
    // private width: number;
    batchProcessInput(arg0: TranslatorContext, arg1: Image[]): (Object | null)[];
    batchProcessOutput(arg0: TranslatorContext, arg1: (Object | null)[]): T[];
    getBatchifier(): Batchifier;
    getExpansions(): TranslatorOptions;
    prepare(arg0: TranslatorContext): void;
    processInput(arg0: TranslatorContext, arg1: Image): (Object | null)[];
}