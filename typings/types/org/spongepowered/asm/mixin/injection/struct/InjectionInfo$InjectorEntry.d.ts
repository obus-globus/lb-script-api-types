import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../../../../java/lang/reflect/Constructor.d.ts'
import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { MixinTargetContext } from '../../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
export class InjectionInfo$InjectorEntry extends Object {
    constructor(arg0: Class<Annotation>, arg1: Class<InjectionInfo>)
    // private annotationDesc: string;
    // private annotationType: Class<Annotation>;
    // private ctor: Constructor<InjectionInfo>;
    // private injectorType: Class<InjectionInfo>;
    // private prefix: string;
    create(arg0: MixinTargetContext, arg1: MethodNode, arg2: AnnotationNode): InjectionInfo;
}