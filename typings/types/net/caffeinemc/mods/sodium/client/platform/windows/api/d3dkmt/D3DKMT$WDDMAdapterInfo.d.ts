import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { GraphicsAdapterInfo } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/compatibility/environment/probe/GraphicsAdapterInfo.d.ts'
import type { GraphicsAdapterVendor } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/compatibility/environment/probe/GraphicsAdapterVendor.d.ts'
import type { WindowsFileVersion } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/platform/windows/WindowsFileVersion.d.ts'
export class D3DKMT$WDDMAdapterInfo extends Record implements GraphicsAdapterInfo {
    // private adapterType: number;
    // private name: string;
    // private openglIcdFilePath: string;
    // private openglIcdVersion: WindowsFileVersion;
    // private vendor: GraphicsAdapterVendor;
    adapterType(): number;
    equals(arg0: Object | null): boolean;
    getOpenGlIcdName(): string;
    hashCode(): number;
    name(): string;
    openglIcdFilePath(): string;
    openglIcdVersion(): WindowsFileVersion;
    toString(): string;
    vendor(): GraphicsAdapterVendor;
}