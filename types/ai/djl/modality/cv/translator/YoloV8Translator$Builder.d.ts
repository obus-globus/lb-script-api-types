import type { YoloV5Translator$Builder } from '../../../../../ai/djl/modality/cv/translator/YoloV5Translator$Builder.d.ts'
import type { YoloV8Translator } from '../../../../../ai/djl/modality/cv/translator/YoloV8Translator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class YoloV8Translator$Builder extends YoloV5Translator$Builder {
    constructor()
    // private maxBox: number;
    build(): YoloV8Translator;
    configPostProcess(arg0: { [key: string]: Object | null }): void;
}