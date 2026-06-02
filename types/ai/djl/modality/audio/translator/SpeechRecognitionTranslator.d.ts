import type { Audio } from '../../../../../ai/djl/modality/audio/Audio.d.ts'
import type { Batchifier } from '../../../../../ai/djl/translate/Batchifier.d.ts'
import type { NoBatchifyTranslator } from '../../../../../ai/djl/translate/NoBatchifyTranslator.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SpeechRecognitionTranslator extends Object implements NoBatchifyTranslator<Audio, string> {
    constructor()
    getBatchifier(): Batchifier;
    processInput(arg0: TranslatorContext, arg1: Audio): (Object | null)[];
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): string;
}