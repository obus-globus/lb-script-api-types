import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { GlContextInfo } from '../../../../../../../../net/caffeinemc/mods/sodium/client/compatibility/environment/GlContextInfo.d.ts'
export class GraphicsAdapterVendor extends Enum<GraphicsAdapterVendor> {
    static AMD: GraphicsAdapterVendor;
    static INTEL: GraphicsAdapterVendor;
    static NVIDIA: GraphicsAdapterVendor;
    static UNKNOWN: GraphicsAdapterVendor;
    static fromContext(paramarg0: GlContextInfo): GraphicsAdapterVendor;
    static fromIcdName(paramarg0: string): GraphicsAdapterVendor;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GraphicsAdapterVendor;
    static values(): (Object | null)[];
    private constructor()
    name(): "NVIDIA" | "AMD" | "INTEL" | "UNKNOWN";
}