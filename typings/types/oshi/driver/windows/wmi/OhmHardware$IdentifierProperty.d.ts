import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class OhmHardware$IdentifierProperty extends Enum<OhmHardware$IdentifierProperty> {
    static IDENTIFIER: OhmHardware$IdentifierProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): OhmHardware$IdentifierProperty;
    static values(): OhmHardware$IdentifierProperty[];
    private constructor()
    name(): "IDENTIFIER";
}