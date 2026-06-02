import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MappingResolver } from '../../../../net/fabricmc/loader/api/MappingResolver.d.ts'
export class LazyMappingResolver extends Object implements MappingResolver {
    constructor(arg0: () => MappingResolver, arg1: string)
    readonly currentRuntimeNamespace: string;
    // private delegate: MappingResolver;
    // private delegateSupplier: () => MappingResolver;
    getCurrentRuntimeNamespace(): string;
    // private getDelegate(): MappingResolver;
    getNamespaces(): E[];
    mapClassName(arg0: string, arg1: string): string;
    mapFieldName(arg0: string, arg1: string, arg2: string, arg3: string): string;
    mapMethodName(arg0: string, arg1: string, arg2: string, arg3: string): string;
    unmapClassName(arg0: string, arg1: string): string;
}