import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Win32OperatingSystem$OSVersionProperty } from '../../../../oshi/driver/windows/wmi/Win32OperatingSystem$OSVersionProperty.d.ts'
export class Win32OperatingSystem extends Object {
    static queryOsVersion(): WbemcliUtil$WmiResult<Win32OperatingSystem$OSVersionProperty>;
    private constructor()
}