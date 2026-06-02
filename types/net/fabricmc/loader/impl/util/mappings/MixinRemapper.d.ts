import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MappingTree } from '../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { IRemapper } from '../../../../../../org/spongepowered/asm/mixin/extensibility/IRemapper.d.ts'
export class MixinRemapper extends Object implements IRemapper {
    constructor(arg0: MappingTree, arg1: number, arg2: number)
    // private fromId: number;
    // private mappings: MappingTree;
    // private toId: number;
    map(arg0: string): string;
    mapDesc(arg0: string): string;
    mapFieldName(arg0: string, arg1: string, arg2: string): string;
    mapMethodName(arg0: string, arg1: string, arg2: string): string;
    unmap(arg0: string): string;
    unmapDesc(arg0: string): string;
}