import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32Process$ProcessXPProperty extends Enum<Win32Process$ProcessXPProperty> {
    static EXECUTABLEPATH: Win32Process$ProcessXPProperty;
    static HANDLECOUNT: Win32Process$ProcessXPProperty;
    static KERNELMODETIME: Win32Process$ProcessXPProperty;
    static NAME: Win32Process$ProcessXPProperty;
    static PAGEFILEUSAGE: Win32Process$ProcessXPProperty;
    static PROCESSID: Win32Process$ProcessXPProperty;
    static THREADCOUNT: Win32Process$ProcessXPProperty;
    static USERMODETIME: Win32Process$ProcessXPProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Win32Process$ProcessXPProperty;
    static values(): Win32Process$ProcessXPProperty[];
    private constructor()
    name(): "PROCESSID" | "NAME" | "KERNELMODETIME" | "USERMODETIME" | "THREADCOUNT" | "PAGEFILEUSAGE" | "HANDLECOUNT" | "EXECUTABLEPATH";
}