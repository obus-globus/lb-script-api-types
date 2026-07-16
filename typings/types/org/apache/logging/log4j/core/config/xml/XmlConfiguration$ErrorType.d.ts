import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class XmlConfiguration$ErrorType extends Enum<XmlConfiguration$ErrorType> {
    static CLASS_NOT_FOUND: XmlConfiguration$ErrorType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): XmlConfiguration$ErrorType;
    static values(): XmlConfiguration$ErrorType[];
    private constructor()
    name(): "CLASS_NOT_FOUND";
}