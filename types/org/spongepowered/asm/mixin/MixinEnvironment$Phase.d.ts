import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MixinEnvironment } from '../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
export class MixinEnvironment$Phase extends Object {
    static DEFAULT: MixinEnvironment$Phase;
    static INIT: MixinEnvironment$Phase;
    static PREINIT: MixinEnvironment$Phase;
    static forName(paramarg0: string): MixinEnvironment$Phase;
    private constructor(arg0: number, arg1: string)
    // private environment: MixinEnvironment;
    // private name: string;
    // private ordinal: number;
    getEnvironment(): MixinEnvironment;
    toString(): string;
}