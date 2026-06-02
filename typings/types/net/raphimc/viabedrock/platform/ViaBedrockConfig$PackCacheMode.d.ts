import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { ResourcePackProvider } from '../../../../net/raphimc/viabedrock/protocol/provider/ResourcePackProvider.d.ts'
export class ViaBedrockConfig$PackCacheMode extends Enum<ViaBedrockConfig$PackCacheMode> {
    static DISABLED: ViaBedrockConfig$PackCacheMode;
    static DISK: ViaBedrockConfig$PackCacheMode;
    static MEMORY: ViaBedrockConfig$PackCacheMode;
    static byName(paramarg0: string): ViaBedrockConfig$PackCacheMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ViaBedrockConfig$PackCacheMode;
    static values(): (Object | null)[];
    private constructor(arg2: () => ResourcePackProvider)
    // private providerSupplier: () => ResourcePackProvider;
    createProvider(): ResourcePackProvider;
    name(): "DISABLED" | "MEMORY" | "DISK";
}