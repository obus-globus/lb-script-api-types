import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { FieldNode } from '../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { ClassInfo$Method } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Method.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
import type { MixinInfo$MixinClassNode } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$MixinClassNode.d.ts'
import type { MixinInfo$MixinMethodNode } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$MixinMethodNode.d.ts'
import type { MixinPreProcessorStandard } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinPreProcessorStandard.d.ts'
import type { MixinTargetContext } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
export class MixinPreProcessorInterface extends MixinPreProcessorStandard {
    constructor(arg0: MixinInfo, arg1: MixinInfo$MixinClassNode)
    prepareMethod(arg0: MixinInfo$MixinMethodNode, arg1: ClassInfo$Method): void;
    validateField(arg0: MixinTargetContext, arg1: FieldNode, arg2: AnnotationNode): boolean;
}