import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32Bios$BiosProperty extends Enum<Win32Bios$BiosProperty> {
    static DESCRIPTION: Win32Bios$BiosProperty;
    static MANUFACTURER: Win32Bios$BiosProperty;
    static NAME: Win32Bios$BiosProperty;
    static RELEASEDATE: Win32Bios$BiosProperty;
    static VERSION: Win32Bios$BiosProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Win32Bios$BiosProperty;
    static values(): (Object | null)[];
    private constructor()
    name(): "MANUFACTURER" | "NAME" | "DESCRIPTION" | "VERSION" | "RELEASEDATE";
}