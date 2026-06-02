import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { AccessorInfo$AccessorType } from '../../../../org/spongepowered/asm/mixin/gen/AccessorInfo$AccessorType.d.ts'
import type { IMixinContext } from '../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { AnnotatedMixinElementHandlerAccessor$AnnotatedElementAccessor } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandlerAccessor$AnnotatedElementAccessor.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
import type { TypeHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class AnnotatedMixinElementHandlerAccessor$AnnotatedElementInvoker extends AnnotatedMixinElementHandlerAccessor$AnnotatedElementAccessor {
    constructor(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: IMixinContext, arg3: boolean)
    // private type: AccessorInfo$AccessorType;
    attach(arg0: TypeHandle): void;
    getAccessorType(): AccessorInfo$AccessorType;
    getAnnotationValue(): string;
    getTargetDesc(): string;
    getTargetTypeName(): string;
    shouldRemap(): boolean;
}