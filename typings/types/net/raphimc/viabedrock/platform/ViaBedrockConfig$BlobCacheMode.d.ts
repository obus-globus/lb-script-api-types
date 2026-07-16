import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { BlobCacheProvider } from '../../../../net/raphimc/viabedrock/protocol/provider/BlobCacheProvider.d.ts'
export class ViaBedrockConfig$BlobCacheMode extends Enum<ViaBedrockConfig$BlobCacheMode> {
    static DISABLED: ViaBedrockConfig$BlobCacheMode;
    static DISK: ViaBedrockConfig$BlobCacheMode;
    static MEMORY: ViaBedrockConfig$BlobCacheMode;
    static byName(paramarg0: string): ViaBedrockConfig$BlobCacheMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ViaBedrockConfig$BlobCacheMode;
    static values(): ViaBedrockConfig$BlobCacheMode[];
    private constructor(arg2: () => BlobCacheProvider)
    // private providerSupplier: () => BlobCacheProvider;
    createProvider(): BlobCacheProvider;
    name(): "DISABLED" | "MEMORY" | "DISK";
}