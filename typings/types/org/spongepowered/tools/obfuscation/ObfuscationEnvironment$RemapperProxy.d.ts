import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ObfuscationUtil$IClassRemapper } from '../../../../org/spongepowered/asm/util/ObfuscationUtil$IClassRemapper.d.ts'
import type { ObfuscationEnvironment } from '../../../../org/spongepowered/tools/obfuscation/ObfuscationEnvironment.d.ts'
export class ObfuscationEnvironment$RemapperProxy extends Object implements ObfuscationUtil$IClassRemapper {
    constructor(null_: ObfuscationEnvironment)
    map(arg0: string): string;
    unmap(arg0: string): string;
}