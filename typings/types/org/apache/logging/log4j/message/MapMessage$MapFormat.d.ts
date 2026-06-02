import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MapMessage$MapFormat extends Enum<MapMessage$MapFormat> {
    static JAVA: MapMessage$MapFormat;
    static JAVA_UNQUOTED: MapMessage$MapFormat;
    static JSON: MapMessage$MapFormat;
    static XML: MapMessage$MapFormat;
    static lookupIgnoreCase(paramformat: string): MapMessage$MapFormat;
    static names(): (Object | null)[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MapMessage$MapFormat;
    static values(): (Object | null)[];
    private constructor()
    name(): "XML" | "JSON" | "JAVA" | "JAVA_UNQUOTED";
}