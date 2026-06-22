import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IMixinConfigSource } from '../../../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfigSource.d.ts'
export interface IContainerHandle extends Object, IMixinConfigSource{
    getAttribute(arg0: string): string;
    getDescription(): string;
    getId(): string;
    getNestedContainers(): IContainerHandle[];
}