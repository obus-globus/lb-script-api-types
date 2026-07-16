import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class StructuredDataMessage$Format extends Enum<StructuredDataMessage$Format> {
    static FULL: StructuredDataMessage$Format;
    static XML: StructuredDataMessage$Format;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): StructuredDataMessage$Format;
    static values(): StructuredDataMessage$Format[];
    private constructor()
    name(): "XML" | "FULL";
}