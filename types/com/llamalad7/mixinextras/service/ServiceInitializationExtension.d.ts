import type { MixinExtrasService } from '../../../../com/llamalad7/mixinextras/service/MixinExtrasService.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MixinEnvironment } from '../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { IExtension } from '../../../../org/spongepowered/asm/mixin/transformer/ext/IExtension.d.ts'
import type { ITargetClassContext } from '../../../../org/spongepowered/asm/mixin/transformer/ext/ITargetClassContext.d.ts'
export class ServiceInitializationExtension extends Object implements IExtension {
    constructor(arg0: MixinExtrasService)
    // private initialized: boolean;
    // private service: MixinExtrasService;
    checkActive(arg0: MixinEnvironment): boolean;
    export(arg0: MixinEnvironment, arg1: string, arg2: boolean, arg3: ClassNode): void;
    postApply(arg0: ITargetClassContext): void;
    preApply(arg0: ITargetClassContext): void;
}