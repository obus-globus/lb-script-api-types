import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Handle } from '../../../../../org/objectweb/asm/Handle.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
import type { MethodNodeEx } from '../../../../../org/spongepowered/asm/util/asm/MethodNodeEx.d.ts'
export class MixinInfo$MixinMethodNode extends MethodNodeEx {
    static getName(paramarg0: MethodNode): string;
    constructor(null_: MixinInfo, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[])
    getInjectorAnnotation(): AnnotationNode;
    getVisibleAnnotation(arg0: Class<Annotation>): AnnotationNode;
    isInjector(): boolean;
    isSurrogate(): boolean;
    isSynthetic(): boolean;
    visitInvokeDynamicInsn(arg0: string, arg1: string, arg2: Handle, arg3: Object[]): void;
}