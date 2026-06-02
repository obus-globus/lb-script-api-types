import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Win32LogicalDisk$LogicalDiskProperty } from '../../../../oshi/driver/windows/wmi/Win32LogicalDisk$LogicalDiskProperty.d.ts'
export class Win32LogicalDisk extends Object {
    static queryLogicalDisk(paramarg0: string, paramarg1: boolean): WbemcliUtil$WmiResult<Win32LogicalDisk$LogicalDiskProperty>;
    private constructor()
}