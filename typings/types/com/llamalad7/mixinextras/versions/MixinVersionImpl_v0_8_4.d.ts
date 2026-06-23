import type { MixinVersion } from '../../../../com/llamalad7/mixinextras/versions/MixinVersion.d.ts'
import type { MixinVersionImpl_v0_8_3 } from '../../../../com/llamalad7/mixinextras/versions/MixinVersionImpl_v0_8_3.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { IMixinConfig } from '../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfig.d.ts'
import type { LocalVariableDiscriminator$Context } from '../../../../org/spongepowered/asm/mixin/injection/modify/LocalVariableDiscriminator$Context.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
export class MixinVersionImpl_v0_8_4 extends MixinVersionImpl_v0_8_3 {
    static getInstance(): MixinVersion;
    constructor()
    getDecoration<T extends unknown>(arg0: IMixinConfig, arg1: string, arg2: T): T;
    makeInvalidInjectionException(arg0: InjectionInfo, arg1: string): RuntimeException;
    makeLvtContext(arg0: InjectionInfo, arg1: Type, arg2: boolean, arg3: AbstractInsnNode[], arg4: AbstractInsnNode): LocalVariableDiscriminator$Context;
}