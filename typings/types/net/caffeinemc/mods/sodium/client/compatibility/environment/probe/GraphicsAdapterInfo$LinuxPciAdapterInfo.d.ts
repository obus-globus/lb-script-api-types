import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { GraphicsAdapterInfo } from '../../../../../../../../net/caffeinemc/mods/sodium/client/compatibility/environment/probe/GraphicsAdapterInfo.d.ts'
import type { GraphicsAdapterVendor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/compatibility/environment/probe/GraphicsAdapterVendor.d.ts'
export class GraphicsAdapterInfo$LinuxPciAdapterInfo extends Record implements GraphicsAdapterInfo {
    constructor(vendor: GraphicsAdapterVendor, name: string, pciVendorId: string, pciDeviceId: string)
    // private name: string;
    // private pciDeviceId: string;
    // private pciVendorId: string;
    // private vendor: GraphicsAdapterVendor;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    pciDeviceId(): string;
    pciVendorId(): string;
    toString(): string;
    vendor(): GraphicsAdapterVendor;
}