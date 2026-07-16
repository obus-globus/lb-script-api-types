import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32VideoController$VideoControllerProperty extends Enum<Win32VideoController$VideoControllerProperty> {
    static ADAPTERCOMPATIBILITY: Win32VideoController$VideoControllerProperty;
    static ADAPTERRAM: Win32VideoController$VideoControllerProperty;
    static DRIVERVERSION: Win32VideoController$VideoControllerProperty;
    static NAME: Win32VideoController$VideoControllerProperty;
    static PNPDEVICEID: Win32VideoController$VideoControllerProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Win32VideoController$VideoControllerProperty;
    static values(): Win32VideoController$VideoControllerProperty[];
    private constructor()
    name(): "ADAPTERCOMPATIBILITY" | "ADAPTERRAM" | "DRIVERVERSION" | "NAME" | "PNPDEVICEID";
}