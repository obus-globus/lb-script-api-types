import type { Image } from '../../../../../../ai/djl/modality/cv/Image.d.ts'
import type { PreProcessor } from '../../../../../../ai/djl/translate/PreProcessor.d.ts'
import type { TranslatorContext } from '../../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InputStreamImagePreProcessor<T extends unknown> extends Object implements PreProcessor<InputStream> {
    constructor(arg0: PreProcessor<Image>)
    // private preProcessor: PreProcessor<Image>;
    processInput(arg0: TranslatorContext, arg1: InputStream): (Object | null)[];
}