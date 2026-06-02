import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32PhysicalMemory$PhysicalMemoryProperty extends Enum<Win32PhysicalMemory$PhysicalMemoryProperty> {
    static BANKLABEL: Win32PhysicalMemory$PhysicalMemoryProperty;
    static CAPACITY: Win32PhysicalMemory$PhysicalMemoryProperty;
    static MANUFACTURER: Win32PhysicalMemory$PhysicalMemoryProperty;
    static PARTNUMBER: Win32PhysicalMemory$PhysicalMemoryProperty;
    static SERIALNUMBER: Win32PhysicalMemory$PhysicalMemoryProperty;
    static SMBIOSMEMORYTYPE: Win32PhysicalMemory$PhysicalMemoryProperty;
    static SPEED: Win32PhysicalMemory$PhysicalMemoryProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Win32PhysicalMemory$PhysicalMemoryProperty;
    static values(): (Object | null)[];
    private constructor()
    name(): "BANKLABEL" | "CAPACITY" | "SPEED" | "MANUFACTURER" | "PARTNUMBER" | "SMBIOSMEMORYTYPE" | "SERIALNUMBER";
}