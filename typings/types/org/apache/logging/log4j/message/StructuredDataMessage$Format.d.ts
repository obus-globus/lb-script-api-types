import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class StructuredDataMessage$Format extends Enum<StructuredDataMessage$Format> {
    static FULL: StructuredDataMessage$Format;
    static XML: StructuredDataMessage$Format;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StructuredDataMessage$Format;
    static values(): StructuredDataMessage$Format[];
    private constructor()
    name(): "XML" | "FULL";
}