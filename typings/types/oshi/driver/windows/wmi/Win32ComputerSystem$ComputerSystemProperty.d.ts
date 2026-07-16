import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32ComputerSystem$ComputerSystemProperty extends Enum<Win32ComputerSystem$ComputerSystemProperty> {
    static MANUFACTURER: Win32ComputerSystem$ComputerSystemProperty;
    static MODEL: Win32ComputerSystem$ComputerSystemProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Win32ComputerSystem$ComputerSystemProperty;
    static values(): Win32ComputerSystem$ComputerSystemProperty[];
    private constructor()
    name(): "MANUFACTURER" | "MODEL";
}