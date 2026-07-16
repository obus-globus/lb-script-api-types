import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class YoloV5Translator$YoloOutputType extends Enum<YoloV5Translator$YoloOutputType> {
    static AUTO: YoloV5Translator$YoloOutputType;
    static BOX: YoloV5Translator$YoloOutputType;
    static DETECT: YoloV5Translator$YoloOutputType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): YoloV5Translator$YoloOutputType;
    static values(): YoloV5Translator$YoloOutputType[];
    private constructor()
    name(): "BOX" | "DETECT" | "AUTO";
}