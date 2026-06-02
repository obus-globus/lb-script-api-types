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
export class CompatibilityHelper extends Object {
    static getAnnotation(paramarg0: InjectionInfo): AnnotationNode;
    static getDecoration(paramarg0: IMixinConfig, paramarg1: string, paramarg2: Object | null): Object | null;
    static getMixin(paramarg0: InjectionInfo): IMixinContext;
    static getOrder(paramarg0: InjectionInfo): number;
    static getTargets(paramarg0: InjectionInfo): AbstractInsnNode[][];
    static makeInvalidInjectionException(paramarg0: InjectionInfo, paramarg1: string): RuntimeException;
    static makeLvtContext(paramarg0: InjectionInfo, paramarg1: Type, paramarg2: boolean, paramarg3: AbstractInsnNode[], paramarg4: AbstractInsnNode): LocalVariableDiscriminator$Context;
    static parseMemberInfo(paramarg0: string, paramarg1: InjectionInfo): MemberInfo;
    static preInject(paramarg0: InjectionInfo): void;
    constructor()
}