import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Handle } from '../../../../org/objectweb/asm/Handle.d.ts'
import type { Remapper } from '../../../../org/objectweb/asm/commons/Remapper.d.ts'
export class SimpleRemapper extends Remapper {
    constructor(arg0: number, arg1: string, arg2: string)
    constructor(arg0: number, arg1: { [key: string]: string })
    constructor(arg0: string, arg1: string)
    constructor(arg0: { [key: string]: string })
    // private mapping: { [key: string]: string };
    map(arg0: string): string;
    mapAnnotationAttributeName(arg0: string, arg1: string): string;
    mapFieldName(arg0: string, arg1: string, arg2: string): string;
    mapInvokeDynamicMethodName(arg0: string, arg1: string): string;
    mapInvokeDynamicMethodName(arg0: string, arg1: string, arg2: Handle, arg3: Object[]): string;
    mapMethodName(arg0: string, arg1: string, arg2: string): string;
}