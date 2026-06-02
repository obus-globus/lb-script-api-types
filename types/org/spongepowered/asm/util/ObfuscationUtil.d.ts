import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ObfuscationUtil$IClassRemapper } from '../../../../org/spongepowered/asm/util/ObfuscationUtil$IClassRemapper.d.ts'
export abstract class ObfuscationUtil extends Object {
    static mapDescriptor(paramarg0: string, paramarg1: ObfuscationUtil$IClassRemapper): string;
    static unmapDescriptor(paramarg0: string, paramarg1: ObfuscationUtil$IClassRemapper): string;
    private constructor()
}