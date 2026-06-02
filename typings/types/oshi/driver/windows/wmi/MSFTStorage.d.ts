import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MSFTStorage$PhysicalDiskProperty } from '../../../../oshi/driver/windows/wmi/MSFTStorage$PhysicalDiskProperty.d.ts'
import type { MSFTStorage$StoragePoolProperty } from '../../../../oshi/driver/windows/wmi/MSFTStorage$StoragePoolProperty.d.ts'
import type { MSFTStorage$StoragePoolToPhysicalDiskProperty } from '../../../../oshi/driver/windows/wmi/MSFTStorage$StoragePoolToPhysicalDiskProperty.d.ts'
import type { MSFTStorage$VirtualDiskProperty } from '../../../../oshi/driver/windows/wmi/MSFTStorage$VirtualDiskProperty.d.ts'
import type { WmiQueryHandler } from '../../../../oshi/util/platform/windows/WmiQueryHandler.d.ts'
export class MSFTStorage extends Object {
    static queryPhysicalDisks(paramarg0: WmiQueryHandler): WbemcliUtil$WmiResult<MSFTStorage$PhysicalDiskProperty>;
    static queryStoragePoolPhysicalDisks(paramarg0: WmiQueryHandler): WbemcliUtil$WmiResult<MSFTStorage$StoragePoolToPhysicalDiskProperty>;
    static queryStoragePools(paramarg0: WmiQueryHandler): WbemcliUtil$WmiResult<MSFTStorage$StoragePoolProperty>;
    static queryVirtualDisks(paramarg0: WmiQueryHandler): WbemcliUtil$WmiResult<MSFTStorage$VirtualDiskProperty>;
    private constructor()
}