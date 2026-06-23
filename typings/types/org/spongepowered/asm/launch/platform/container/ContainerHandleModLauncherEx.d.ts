import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { ContainerHandleModLauncher } from '../../../../../../org/spongepowered/asm/launch/platform/container/ContainerHandleModLauncher.d.ts'
export class ContainerHandleModLauncherEx extends ContainerHandleModLauncher {
    constructor(arg0: string)
    addResource(arg0: Object): void;
    addResource(arg0: string, arg1: Path[]): void;
    addResource(arg0: Map$Entry<string, Path[]>): void;
}