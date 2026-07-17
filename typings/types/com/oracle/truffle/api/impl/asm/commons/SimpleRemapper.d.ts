import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Remapper } from '../../../../../../../com/oracle/truffle/api/impl/asm/commons/Remapper.d.ts'
export class SimpleRemapper extends Remapper {
    constructor(oldName: string, newName: string)
    constructor(mapping: JavaMap<string, string>)
    // private mapping: JavaMap<string, string>;
    map(key: string): string;
    mapAnnotationAttributeName(descriptor: string, name: string): string;
    mapFieldName(owner: string, name: string, descriptor: string): string;
    mapInvokeDynamicMethodName(name: string, descriptor: string): string;
    mapMethodName(owner: string, name: string, descriptor: string): string;
}