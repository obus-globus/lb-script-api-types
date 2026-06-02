import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Remapper } from '../../../../org/objectweb/asm/commons/Remapper.d.ts'
import type { ILogger } from '../../../../org/spongepowered/asm/logging/ILogger.d.ts'
import type { IRemapper } from '../../../../org/spongepowered/asm/mixin/extensibility/IRemapper.d.ts'
import type { ObfuscationUtil$IClassRemapper } from '../../../../org/spongepowered/asm/util/ObfuscationUtil$IClassRemapper.d.ts'
export abstract class RemapperAdapter extends Object implements IRemapper, ObfuscationUtil$IClassRemapper {
    constructor(arg0: Remapper)
    // private logger: ILogger;
    // private remapper: Remapper;
    map(arg0: string): string;
    mapDesc(arg0: string): string;
    mapFieldName(arg0: string, arg1: string, arg2: string): string;
    mapMethodName(arg0: string, arg1: string, arg2: string): string;
    toString(): string;
    unmap(arg0: string): string;
    unmapDesc(arg0: string): string;
}