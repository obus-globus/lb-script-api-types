import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Win32DiskPartition$DiskPartitionProperty } from '../../../../oshi/driver/windows/wmi/Win32DiskPartition$DiskPartitionProperty.d.ts'
import type { WmiQueryHandler } from '../../../../oshi/util/platform/windows/WmiQueryHandler.d.ts'
export class Win32DiskPartition extends Object {
    static queryPartition(paramarg0: WmiQueryHandler): WbemcliUtil$WmiResult<Win32DiskPartition$DiskPartitionProperty>;
    private constructor()
}