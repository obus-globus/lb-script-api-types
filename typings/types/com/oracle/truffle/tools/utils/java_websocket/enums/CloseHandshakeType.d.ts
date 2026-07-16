import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class CloseHandshakeType extends Enum<CloseHandshakeType> {
    static NONE: CloseHandshakeType;
    static ONEWAY: CloseHandshakeType;
    static TWOWAY: CloseHandshakeType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CloseHandshakeType;
    static values(): CloseHandshakeType[];
    private constructor()
    name(): "NONE" | "ONEWAY" | "TWOWAY";
}