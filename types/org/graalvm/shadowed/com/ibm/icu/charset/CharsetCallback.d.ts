import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharsetCallback$Decoder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetCallback$Decoder.d.ts'
import type { CharsetCallback$Encoder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetCallback$Encoder.d.ts'
export class CharsetCallback extends Object {
    static FROM_U_CALLBACK_ESCAPE: CharsetCallback$Encoder;
    static FROM_U_CALLBACK_SKIP: CharsetCallback$Encoder;
    static FROM_U_CALLBACK_STOP: CharsetCallback$Encoder;
    static FROM_U_CALLBACK_SUBSTITUTE: CharsetCallback$Encoder;
    static TO_U_CALLBACK_ESCAPE: CharsetCallback$Decoder;
    static TO_U_CALLBACK_SKIP: CharsetCallback$Decoder;
    static TO_U_CALLBACK_STOP: CharsetCallback$Decoder;
    static TO_U_CALLBACK_SUBSTITUTE: CharsetCallback$Decoder;
    private constructor()
}