import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { ContainerHandleVirtual } from '../../../../../../org/spongepowered/asm/launch/platform/container/ContainerHandleVirtual.d.ts'
export class ContainerHandleModLauncher extends ContainerHandleVirtual {
    constructor(arg0: string)
    addResource(arg0: Object): void;
    addResource(arg0: string, arg1: Path[]): void;
    addResource(arg0: Map$Entry<string, Path[]>): void;
    addResources(arg0: (Object | null)[]): void;
    toString(): string;
}