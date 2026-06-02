import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32ComputerSystem$ComputerSystemProperty extends Enum<Win32ComputerSystem$ComputerSystemProperty> {
    static MANUFACTURER: Win32ComputerSystem$ComputerSystemProperty;
    static MODEL: Win32ComputerSystem$ComputerSystemProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Win32ComputerSystem$ComputerSystemProperty;
    static values(): (Object | null)[];
    private constructor()
    name(): "MANUFACTURER" | "MODEL";
}