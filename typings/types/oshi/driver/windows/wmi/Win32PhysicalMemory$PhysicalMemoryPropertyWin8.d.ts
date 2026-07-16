import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32PhysicalMemory$PhysicalMemoryPropertyWin8 extends Enum<Win32PhysicalMemory$PhysicalMemoryPropertyWin8> {
    static BANKLABEL: Win32PhysicalMemory$PhysicalMemoryPropertyWin8;
    static CAPACITY: Win32PhysicalMemory$PhysicalMemoryPropertyWin8;
    static MANUFACTURER: Win32PhysicalMemory$PhysicalMemoryPropertyWin8;
    static MEMORYTYPE: Win32PhysicalMemory$PhysicalMemoryPropertyWin8;
    static PARTNUMBER: Win32PhysicalMemory$PhysicalMemoryPropertyWin8;
    static SERIALNUMBER: Win32PhysicalMemory$PhysicalMemoryPropertyWin8;
    static SPEED: Win32PhysicalMemory$PhysicalMemoryPropertyWin8;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Win32PhysicalMemory$PhysicalMemoryPropertyWin8;
    static values(): Win32PhysicalMemory$PhysicalMemoryPropertyWin8[];
    private constructor()
    name(): "BANKLABEL" | "CAPACITY" | "SPEED" | "MANUFACTURER" | "MEMORYTYPE" | "PARTNUMBER" | "SERIALNUMBER";
}