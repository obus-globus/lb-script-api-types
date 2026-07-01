import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
export abstract class IntLikeBehaviour extends Object {
    constructor(arg0: any)
    replaceIntLike(arg0: InjectionInfo, arg1: Type, arg2: Type): Type;
    transform(arg0: InjectionInfo, arg1: Type, arg2: Type): Type;
    transformImpl(arg0: InjectionInfo, arg1: Type, arg2: Type): Type;
}