import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IRemapper } from '../../../../org/spongepowered/asm/mixin/extensibility/IRemapper.d.ts'
export class RemapperChain extends Object implements IRemapper {
    constructor()
    // private remappers: IRemapper[];
    add(arg0: IRemapper): RemapperChain;
    map(arg0: string): string;
    mapDesc(arg0: string): string;
    mapFieldName(arg0: string, arg1: string, arg2: string): string;
    mapMethodName(arg0: string, arg1: string, arg2: string): string;
    toString(): string;
    unmap(arg0: string): string;
    unmapDesc(arg0: string): string;
}