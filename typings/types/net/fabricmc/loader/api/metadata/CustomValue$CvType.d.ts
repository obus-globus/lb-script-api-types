import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CustomValue$CvType extends Enum<CustomValue$CvType> {
    static ARRAY: CustomValue$CvType;
    static BOOLEAN: CustomValue$CvType;
    static NULL: CustomValue$CvType;
    static NUMBER: CustomValue$CvType;
    static OBJECT: CustomValue$CvType;
    static STRING: CustomValue$CvType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CustomValue$CvType;
    static values(): CustomValue$CvType[];
    private constructor()
    name(): "OBJECT" | "ARRAY" | "STRING" | "NUMBER" | "BOOLEAN" | "NULL";
}