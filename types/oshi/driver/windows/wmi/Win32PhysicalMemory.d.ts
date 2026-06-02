import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Win32PhysicalMemory$PhysicalMemoryProperty } from '../../../../oshi/driver/windows/wmi/Win32PhysicalMemory$PhysicalMemoryProperty.d.ts'
import type { Win32PhysicalMemory$PhysicalMemoryPropertyWin8 } from '../../../../oshi/driver/windows/wmi/Win32PhysicalMemory$PhysicalMemoryPropertyWin8.d.ts'
export class Win32PhysicalMemory extends Object {
    static queryphysicalMemory(): WbemcliUtil$WmiResult<Win32PhysicalMemory$PhysicalMemoryProperty>;
    static queryphysicalMemoryWin8(): WbemcliUtil$WmiResult<Win32PhysicalMemory$PhysicalMemoryPropertyWin8>;
    private constructor()
}