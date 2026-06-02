import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { GraphicsAdapterVendor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/compatibility/environment/probe/GraphicsAdapterVendor.d.ts'
export interface GraphicsAdapterInfo extends Object{
    name(): string;
    vendor(): GraphicsAdapterVendor;
}