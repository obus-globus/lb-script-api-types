import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Win32LogicalDiskToPartition$DiskToPartitionProperty } from '../../../../oshi/driver/windows/wmi/Win32LogicalDiskToPartition$DiskToPartitionProperty.d.ts'
import type { WmiQueryHandler } from '../../../../oshi/util/platform/windows/WmiQueryHandler.d.ts'
export class Win32LogicalDiskToPartition extends Object {
    static queryDiskToPartition(paramarg0: WmiQueryHandler): WbemcliUtil$WmiResult<Win32LogicalDiskToPartition$DiskToPartitionProperty>;
    private constructor()
}