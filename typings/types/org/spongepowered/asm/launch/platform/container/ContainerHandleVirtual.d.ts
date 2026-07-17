import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IContainerHandle } from '../../../../../../org/spongepowered/asm/launch/platform/container/IContainerHandle.d.ts'
export class ContainerHandleVirtual extends Object implements IContainerHandle {
    constructor(arg0: string)
    // private attributes: JavaMap<string, string>;
    readonly name: string;
    readonly nestedContainers: IContainerHandle[];
    add(arg0: IContainerHandle): ContainerHandleVirtual;
    equals(arg0: Object | null): boolean;
    getAttribute(arg0: string): string;
    getDescription(): string;
    getId(): string;
    getName(): string;
    getNestedContainers(): IContainerHandle[];
    hashCode(): number;
    setAttribute(arg0: string, arg1: string): ContainerHandleVirtual;
    toString(): string;
}