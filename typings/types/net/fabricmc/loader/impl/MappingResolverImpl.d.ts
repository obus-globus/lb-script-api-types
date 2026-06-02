import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MappingResolver } from '../../../../net/fabricmc/loader/api/MappingResolver.d.ts'
import type { MappingTree } from '../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
export class MappingResolverImpl extends Object implements MappingResolver {
    constructor(arg0: MappingTree, arg1: string)
    // private mappings: MappingTree;
    // private targetNamespace: string;
    // private targetNamespaceId: number;
    getCurrentRuntimeNamespace(): string;
    getNamespaces(): E[];
    mapClassName(arg0: string, arg1: string): string;
    mapFieldName(arg0: string, arg1: string, arg2: string, arg3: string): string;
    mapMethodName(arg0: string, arg1: string, arg2: string, arg3: string): string;
    unmapClassName(arg0: string, arg1: string): string;
}