import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { ResourcePack } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/ResourcePack.d.ts'
import type { ResourcePack$Key } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/ResourcePack$Key.d.ts'
import type { ResourcePackProvider } from '../../../../../../net/raphimc/viabedrock/protocol/provider/ResourcePackProvider.d.ts'
export class DiskResourcePackProvider extends ResourcePackProvider {
    constructor()
    // private getPath(arg0: ResourcePack$Key): Path[];
    has(arg0: ResourcePack$Key): boolean;
    load(arg0: ResourcePack$Key): ResourcePack;
    save(arg0: ResourcePack): void;
}