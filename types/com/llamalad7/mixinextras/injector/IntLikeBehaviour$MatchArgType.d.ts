import type { IntLikeBehaviour } from '../../../../com/llamalad7/mixinextras/injector/IntLikeBehaviour.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
export class IntLikeBehaviour$MatchArgType extends IntLikeBehaviour {
    constructor(arg0: number)
    // private index: number;
    transformImpl(arg0: InjectionInfo, arg1: Type, arg2: Type): Type;
}