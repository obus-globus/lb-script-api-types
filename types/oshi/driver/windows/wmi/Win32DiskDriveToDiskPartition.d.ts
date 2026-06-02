import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Win32DiskDriveToDiskPartition$DriveToPartitionProperty } from '../../../../oshi/driver/windows/wmi/Win32DiskDriveToDiskPartition$DriveToPartitionProperty.d.ts'
import type { WmiQueryHandler } from '../../../../oshi/util/platform/windows/WmiQueryHandler.d.ts'
export class Win32DiskDriveToDiskPartition extends Object {
    static queryDriveToPartition(paramarg0: WmiQueryHandler): WbemcliUtil$WmiResult<Win32DiskDriveToDiskPartition$DriveToPartitionProperty>;
    private constructor()
}