import type { Pair } from '../../../../../com/llamalad7/mixinextras/lib/apache/commons/tuple/Pair.d.ts'
import type { SugarApplicationException } from '../../../../../com/llamalad7/mixinextras/sugar/impl/SugarApplicationException.d.ts'
import type { SugarApplicator } from '../../../../../com/llamalad7/mixinextras/sugar/impl/SugarApplicator.d.ts'
import type { SugarParameter } from '../../../../../com/llamalad7/mixinextras/sugar/impl/SugarParameter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodInsnNode } from '../../../../../org/objectweb/asm/tree/MethodInsnNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { InjectionInfo } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class SugarInjector extends Object {
    constructor(arg0: InjectionInfo, arg1: IMixinInfo, arg2: MethodNode, arg3: AnnotationNode[], arg4: Type[])
    // private applicators: SugarApplicator[];
    // private exceptions: SugarApplicationException[];
    // private handler: MethodNode;
    // private injectionInfo: InjectionInfo;
    // private mixin: IMixinInfo;
    // private parameterGenerics: Type[];
    // private strippedSugars: SugarParameter[];
    // private sugarAnnotations: AnnotationNode[];
    // private targets: Map<AbstractInsnNode[], InjectionNodes$InjectionNode[]>;
    getExceptions(): SugarApplicationException[];
    // private makeApplicators(): void;
    // private prepareApplicators(): void;
    prepareSugar(): void;
    reSugarHandler(): void;
    setTargets(arg0: Map<AbstractInsnNode[], InjectionNodes$InjectionNode[]>): void;
    stripSugar(): void;
    transformHandlerCalls(arg0: Map<AbstractInsnNode[], Pair<InjectionNodes$InjectionNode, MethodInsnNode>[]>): void;
    // private validateApplicators(): void;
}