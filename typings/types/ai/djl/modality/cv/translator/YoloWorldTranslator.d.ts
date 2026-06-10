import type { Predictor } from '../../../../../ai/djl/inference/Predictor.d.ts'
import type { VisionLanguageInput } from '../../../../../ai/djl/modality/cv/VisionLanguageInput.d.ts'
import type { DetectedObjects } from '../../../../../ai/djl/modality/cv/output/DetectedObjects.d.ts'
import type { BaseImageTranslator } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator.d.ts'
import type { YoloWorldTranslator$Builder } from '../../../../../ai/djl/modality/cv/translator/YoloWorldTranslator$Builder.d.ts'
import type { YoloWorldTranslator$SimpleBpeTokenizer } from '../../../../../ai/djl/modality/cv/translator/YoloWorldTranslator$SimpleBpeTokenizer.d.ts'
import type { Batchifier } from '../../../../../ai/djl/translate/Batchifier.d.ts'
import type { NoBatchifyTranslator } from '../../../../../ai/djl/translate/NoBatchifyTranslator.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class YoloWorldTranslator extends Object implements NoBatchifyTranslator<VisionLanguageInput, DetectedObjects> {
    static builder(): YoloWorldTranslator$Builder;
    static builder(paramarg0: { [key: string]: Object }): YoloWorldTranslator$Builder;
    constructor(arg0: YoloWorldTranslator$Builder)
    // private clipModelPath: string;
    // private imageProcessor: BaseImageTranslator<Object>;
    // private nmsThreshold: number;
    // private predictor: Predictor<(Object | null)[], (Object | null)[]>;
    // private threshold: number;
    // private tokenizer: YoloWorldTranslator$SimpleBpeTokenizer;
    getBatchifier(): Batchifier;
    prepare(arg0: TranslatorContext): void;
    processInput(arg0: TranslatorContext, arg1: VisionLanguageInput): (Object | null)[];
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): DetectedObjects;
}