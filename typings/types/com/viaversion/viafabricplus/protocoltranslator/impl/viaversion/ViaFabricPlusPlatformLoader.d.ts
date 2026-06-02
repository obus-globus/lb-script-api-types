import type { ViaPlatformLoader } from '../../../../../../com/viaversion/viaversion/api/platform/ViaPlatformLoader.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ViaFabricPlusPlatformLoader extends Object implements ViaPlatformLoader {
    static NOOP: ViaPlatformLoader;
    constructor()
    load(): void;
    unload(): void;
}