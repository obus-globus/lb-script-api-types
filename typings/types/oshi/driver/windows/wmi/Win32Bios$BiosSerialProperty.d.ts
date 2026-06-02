import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32Bios$BiosSerialProperty extends Enum<Win32Bios$BiosSerialProperty> {
    static SERIALNUMBER: Win32Bios$BiosSerialProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Win32Bios$BiosSerialProperty;
    static values(): (Object | null)[];
    private constructor()
    name(): "SERIALNUMBER";
}