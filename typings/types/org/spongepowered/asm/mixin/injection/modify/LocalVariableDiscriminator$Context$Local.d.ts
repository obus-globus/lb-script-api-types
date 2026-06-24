import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { LocalVariableDiscriminator$Context } from '../../../../../../org/spongepowered/asm/mixin/injection/modify/LocalVariableDiscriminator$Context.d.ts'
export class LocalVariableDiscriminator$Context$Local extends Object {
    constructor(null_: LocalVariableDiscriminator$Context, arg1: string, arg2: Type)
    // private name: string;
    // private ord: number;
    // private type: Type;
    getOrdinal(): number;
    setOrdinal(arg0: number): void;
    toString(): string;
}