import type { SugarParameter } from '../../../../../../com/llamalad7/mixinextras/sugar/impl/SugarParameter.d.ts'
import type { HandlerInfo } from '../../../../../../com/llamalad7/mixinextras/sugar/impl/handlers/HandlerInfo.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IMixinInfo } from '../../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
export abstract class HandlerTransformer extends Object {
    static create(paramarg0: IMixinInfo, paramarg1: SugarParameter): HandlerTransformer;
    constructor(arg0: IMixinInfo, arg1: SugarParameter)
    // private mixin: IMixinInfo;
    // private parameter: SugarParameter;
    isRequired(arg0: MethodNode): boolean;
    transform(arg0: HandlerInfo): void;
}