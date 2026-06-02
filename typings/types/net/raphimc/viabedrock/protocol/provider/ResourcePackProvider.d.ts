import type { Provider } from '../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourcePack } from '../../../../../net/raphimc/viabedrock/api/resourcepack/ResourcePack.d.ts'
import type { ResourcePack$Key } from '../../../../../net/raphimc/viabedrock/api/resourcepack/ResourcePack$Key.d.ts'
export abstract class ResourcePackProvider extends Object implements Provider {
    constructor()
    has(arg0: ResourcePack$Key): boolean;
    load(arg0: ResourcePack$Key): ResourcePack;
    save(arg0: ResourcePack): void;
}