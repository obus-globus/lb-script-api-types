import type { File } from '../../../../../../java/io/File.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MainAttributes } from '../../../../../../org/spongepowered/asm/launch/platform/MainAttributes.d.ts'
import type { IContainerHandle } from '../../../../../../org/spongepowered/asm/launch/platform/container/IContainerHandle.d.ts'
export class ContainerHandleURI extends Object implements IContainerHandle {
    constructor(arg0: URI)
    // private attributes: MainAttributes;
    // private uri: URI;
    equals(arg0: Object | null): boolean;
    getAttribute(arg0: string): string;
    getDescription(): string;
    getFile(): File;
    getId(): string;
    getNestedContainers(): IContainerHandle[];
    getURI(): URI;
    hashCode(): number;
    toString(): string;
}