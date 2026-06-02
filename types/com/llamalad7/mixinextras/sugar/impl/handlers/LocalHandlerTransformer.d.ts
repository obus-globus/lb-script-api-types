import type { SugarParameter } from '../../../../../../com/llamalad7/mixinextras/sugar/impl/SugarParameter.d.ts'
import type { HandlerInfo } from '../../../../../../com/llamalad7/mixinextras/sugar/impl/handlers/HandlerInfo.d.ts'
import type { HandlerTransformer } from '../../../../../../com/llamalad7/mixinextras/sugar/impl/handlers/HandlerTransformer.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IMixinInfo } from '../../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
export class LocalHandlerTransformer extends HandlerTransformer {
    static create(paramarg0: IMixinInfo, paramarg1: SugarParameter): HandlerTransformer;
    constructor(arg0: IMixinInfo, arg1: SugarParameter)
    isRequired(arg0: MethodNode): boolean;
    transform(arg0: HandlerInfo): void;
}