import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Remapper } from '../../../../org/objectweb/asm/commons/Remapper.d.ts'
import type { RemapperAdapter } from '../../../../org/spongepowered/asm/bridge/RemapperAdapter.d.ts'
import type { IRemapper } from '../../../../org/spongepowered/asm/mixin/extensibility/IRemapper.d.ts'
export class RemapperAdapterFML extends RemapperAdapter {
    static create(): IRemapper;
    private constructor(arg0: Remapper, arg1: Method)
    // private mdUnmap: Method;
    unmap(arg0: string): string;
}