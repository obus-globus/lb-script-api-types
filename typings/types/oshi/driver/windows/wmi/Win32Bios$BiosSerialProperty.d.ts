import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32Bios$BiosSerialProperty extends Enum<Win32Bios$BiosSerialProperty> {
    static SERIALNUMBER: Win32Bios$BiosSerialProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Win32Bios$BiosSerialProperty;
    static values(): Win32Bios$BiosSerialProperty[];
    private constructor()
    name(): "SERIALNUMBER";
}