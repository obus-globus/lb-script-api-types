import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MappingResolver extends Object{
    getCurrentRuntimeNamespace(): string;
    getNamespaces(): E[];
    mapClassName(arg0: string, arg1: string): string;
    mapFieldName(arg0: string, arg1: string, arg2: string, arg3: string): string;
    mapMethodName(arg0: string, arg1: string, arg2: string, arg3: string): string;
    unmapClassName(arg0: string, arg1: string): string;
}