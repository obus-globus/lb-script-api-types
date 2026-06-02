import type { FlowContext } from '../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowContext.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { InjectionInfo } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export abstract class ExpressionService extends Object {
    static getInstance(): ExpressionService;
    static offerInstance(paramarg0: ExpressionService): void;
    constructor()
    decorateInjectorSpecific(arg0: InjectionNodes$InjectionNode, arg1: InjectionInfo, arg2: string, arg3: Object): void;
    getCommonSuperClass(arg0: FlowContext, arg1: Type, arg2: Type): Type;
    makeInvalidInjectionException(arg0: InjectionInfo, arg1: string): RuntimeException;
}