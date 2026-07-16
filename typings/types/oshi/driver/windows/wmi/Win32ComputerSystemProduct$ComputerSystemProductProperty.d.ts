import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32ComputerSystemProduct$ComputerSystemProductProperty extends Enum<Win32ComputerSystemProduct$ComputerSystemProductProperty> {
    static IDENTIFYINGNUMBER: Win32ComputerSystemProduct$ComputerSystemProductProperty;
    static UUID: Win32ComputerSystemProduct$ComputerSystemProductProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Win32ComputerSystemProduct$ComputerSystemProductProperty;
    static values(): Win32ComputerSystemProduct$ComputerSystemProductProperty[];
    private constructor()
    name(): "IDENTIFYINGNUMBER" | "UUID";
}