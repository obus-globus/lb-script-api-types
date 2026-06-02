import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Win32ComputerSystem$ComputerSystemProperty } from '../../../../oshi/driver/windows/wmi/Win32ComputerSystem$ComputerSystemProperty.d.ts'
export class Win32ComputerSystem extends Object {
    static queryComputerSystem(): WbemcliUtil$WmiResult<Win32ComputerSystem$ComputerSystemProperty>;
    private constructor()
}