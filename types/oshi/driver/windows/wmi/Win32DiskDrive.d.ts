import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Win32DiskDrive$DiskDriveProperty } from '../../../../oshi/driver/windows/wmi/Win32DiskDrive$DiskDriveProperty.d.ts'
import type { WmiQueryHandler } from '../../../../oshi/util/platform/windows/WmiQueryHandler.d.ts'
export class Win32DiskDrive extends Object {
    static queryDiskDrive(paramarg0: WmiQueryHandler): WbemcliUtil$WmiResult<Win32DiskDrive$DiskDriveProperty>;
    private constructor()
}