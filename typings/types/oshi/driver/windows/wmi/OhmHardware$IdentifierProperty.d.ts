import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class OhmHardware$IdentifierProperty extends Enum<OhmHardware$IdentifierProperty> {
    static IDENTIFIER: OhmHardware$IdentifierProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OhmHardware$IdentifierProperty;
    static values(): OhmHardware$IdentifierProperty[];
    private constructor()
    name(): "IDENTIFIER";
}