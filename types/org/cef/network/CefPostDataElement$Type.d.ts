import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefPostDataElement$Type extends Enum<CefPostDataElement$Type> {
    static PDE_TYPE_BYTES: CefPostDataElement$Type;
    static PDE_TYPE_EMPTY: CefPostDataElement$Type;
    static PDE_TYPE_FILE: CefPostDataElement$Type;
    static PDE_TYPE_NUM_VALUES: CefPostDataElement$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CefPostDataElement$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "PDE_TYPE_EMPTY" | "PDE_TYPE_BYTES" | "PDE_TYPE_FILE" | "PDE_TYPE_NUM_VALUES";
}