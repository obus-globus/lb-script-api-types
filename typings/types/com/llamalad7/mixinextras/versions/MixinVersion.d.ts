import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { IMixinConfig } from '../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfig.d.ts'
import type { LocalVariableDiscriminator$Context } from '../../../../org/spongepowered/asm/mixin/injection/modify/LocalVariableDiscriminator$Context.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { MemberInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/MemberInfo.d.ts'
import type { IMixinContext } from '../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
export abstract class MixinVersion extends Object {
    static getInstance(): MixinVersion;
    constructor()
    getAnnotation(arg0: InjectionInfo): AnnotationNode;
    getDecoration<T extends Object | number | string | boolean>(arg0: IMixinConfig, arg1: string, arg2: T): T;
    getMixin(arg0: InjectionInfo): IMixinContext;
    getOrder(arg0: InjectionInfo): number;
    getTargets(arg0: InjectionInfo): AbstractInsnNode[][];
    makeInvalidInjectionException(arg0: InjectionInfo, arg1: string): RuntimeException;
    makeLvtContext(arg0: InjectionInfo, arg1: Type, arg2: boolean, arg3: AbstractInsnNode[], arg4: AbstractInsnNode): LocalVariableDiscriminator$Context;
    parseMemberInfo(arg0: string, arg1: InjectionInfo): MemberInfo;
    preInject(arg0: InjectionInfo): void;
}