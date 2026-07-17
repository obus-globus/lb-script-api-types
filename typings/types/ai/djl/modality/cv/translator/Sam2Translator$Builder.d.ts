import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Sam2Translator } from '../../../../../ai/djl/modality/cv/translator/Sam2Translator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Sam2Translator$Builder extends Object {
    constructor(arg0: JavaMap<string, Object | null>)
    // private encodeMethod: string;
    // private encoderPath: string;
    build(): Sam2Translator;
    optEncodeMethod(arg0: string): Sam2Translator$Builder;
    optEncoderPath(arg0: string): Sam2Translator$Builder;
}