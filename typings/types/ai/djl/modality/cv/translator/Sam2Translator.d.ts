import type { Predictor } from '../../../../../ai/djl/inference/Predictor.d.ts'
import type { DetectedObjects } from '../../../../../ai/djl/modality/cv/output/DetectedObjects.d.ts'
import type { Sam2Translator$Builder } from '../../../../../ai/djl/modality/cv/translator/Sam2Translator$Builder.d.ts'
import type { Sam2Translator$Sam2Input } from '../../../../../ai/djl/modality/cv/translator/Sam2Translator$Sam2Input.d.ts'
import type { Batchifier } from '../../../../../ai/djl/translate/Batchifier.d.ts'
import type { NoBatchifyTranslator } from '../../../../../ai/djl/translate/NoBatchifyTranslator.d.ts'
import type { Pipeline } from '../../../../../ai/djl/translate/Pipeline.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Sam2Translator extends Object implements NoBatchifyTranslator<Sam2Translator$Sam2Input, DetectedObjects> {
    static builder(): Sam2Translator$Builder;
    static builder(paramarg0: { [key: string]: Object }): Sam2Translator$Builder;
    constructor(arg0: Sam2Translator$Builder)
    // private encodeMethod: string;
    // private encoderPath: string;
    // private pipeline: Pipeline;
    // private predictor: Predictor<(Object | null)[], (Object | null)[]>;
    getBatchifier(): Batchifier;
    prepare(arg0: TranslatorContext): void;
    processInput(arg0: TranslatorContext, arg1: Sam2Translator$Sam2Input): (Object | null)[];
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): DetectedObjects;
}