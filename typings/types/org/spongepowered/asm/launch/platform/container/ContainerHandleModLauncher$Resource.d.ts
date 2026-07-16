import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { ContainerHandleModLauncher } from '../../../../../../org/spongepowered/asm/launch/platform/container/ContainerHandleModLauncher.d.ts'
import type { ContainerHandleURI } from '../../../../../../org/spongepowered/asm/launch/platform/container/ContainerHandleURI.d.ts'
export class ContainerHandleModLauncher$Resource extends ContainerHandleURI {
    constructor(null_: ContainerHandleModLauncher, arg1: string, arg2: Path)
    // private name: string;
    // private path: Path;
    getDescription(): string;
    getId(): string;
    toString(): string;
}