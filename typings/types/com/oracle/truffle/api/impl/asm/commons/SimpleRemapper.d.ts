import type { Remapper } from '../../../../../../../com/oracle/truffle/api/impl/asm/commons/Remapper.d.ts'
export class SimpleRemapper extends Remapper {
    constructor(oldName: string, newName: string)
    constructor(mapping: { [key: string]: string })
    // private mapping: { [key: string]: string };
    map(key: string): string;
    mapAnnotationAttributeName(descriptor: string, name: string): string;
    mapFieldName(owner: string, name: string, descriptor: string): string;
    mapInvokeDynamicMethodName(name: string, descriptor: string): string;
    mapMethodName(owner: string, name: string, descriptor: string): string;
}