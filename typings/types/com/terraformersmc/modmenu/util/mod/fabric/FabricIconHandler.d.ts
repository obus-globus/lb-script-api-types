import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModContainer } from '../../../../../../net/fabricmc/loader/api/ModContainer.d.ts'
import type { DynamicTexture } from '../../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class FabricIconHandler extends Object implements Closeable {
    constructor()
    // private modIconCache: JavaMap<Path, DynamicTexture>;
    cacheModIcon(arg0: Path, arg1: DynamicTexture): void;
    close(): void;
    createIcon(arg0: ModContainer, arg1: string): DynamicTexture;
    getCachedModIcon(arg0: Path): DynamicTexture;
}