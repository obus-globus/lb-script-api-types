import type { Image } from '../../../../../ai/djl/modality/cv/Image.d.ts'
import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Batchifier } from '../../../../../ai/djl/translate/Batchifier.d.ts'
import type { NoBatchifyTranslator } from '../../../../../ai/djl/translate/NoBatchifyTranslator.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StyleTransferTranslator extends Object implements NoBatchifyTranslator<Image, Image> {
    constructor()
    getBatchifier(): Batchifier;
    processInput(arg0: TranslatorContext, arg1: Image): (Object | null)[];
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): Image;
    // private switchFormat(arg0: NDArray): NDArray;
}