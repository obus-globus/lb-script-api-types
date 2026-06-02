import type { Remapper } from '../../../../../../../org/objectweb/asm/commons/Remapper.d.ts'
export abstract class TrRemapper extends Remapper {
    constructor()
    mapAnnotationAttributeName(arg0: string, arg1: string): string;
    mapMethodArg(arg0: string, arg1: string, arg2: string, arg3: number, arg4: string): string;
}