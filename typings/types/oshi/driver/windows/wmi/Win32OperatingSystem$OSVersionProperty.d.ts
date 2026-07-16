import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32OperatingSystem$OSVersionProperty extends Enum<Win32OperatingSystem$OSVersionProperty> {
    static BUILDNUMBER: Win32OperatingSystem$OSVersionProperty;
    static CSDVERSION: Win32OperatingSystem$OSVersionProperty;
    static PRODUCTTYPE: Win32OperatingSystem$OSVersionProperty;
    static SUITEMASK: Win32OperatingSystem$OSVersionProperty;
    static VERSION: Win32OperatingSystem$OSVersionProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Win32OperatingSystem$OSVersionProperty;
    static values(): Win32OperatingSystem$OSVersionProperty[];
    private constructor()
    name(): "VERSION" | "PRODUCTTYPE" | "BUILDNUMBER" | "CSDVERSION" | "SUITEMASK";
}