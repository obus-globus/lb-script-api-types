import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { AccessorInfo$AccessorType } from '../../../../org/spongepowered/asm/mixin/gen/AccessorInfo$AccessorType.d.ts'
import type { ITargetSelectorRemappable } from '../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorRemappable.d.ts'
import type { IMixinContext } from '../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { AnnotatedMixinElementHandler$AnnotatedElementExecutable } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler$AnnotatedElementExecutable.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
import type { TypeHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class AnnotatedMixinElementHandlerAccessor$AnnotatedElementAccessor extends AnnotatedMixinElementHandler$AnnotatedElementExecutable {
    constructor(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: IMixinContext, arg3: boolean)
    readonly returnType: TypeMirror;
    // private shouldRemap: boolean;
    targetName: string;
    attach(arg0: TypeHandle): void;
    getAccessorType(): AccessorInfo$AccessorType;
    getAnnotationValue(): string;
    getContext(): ITargetSelectorRemappable;
    getReturnType(): TypeMirror;
    getTargetDesc(): string;
    getTargetName(): string;
    getTargetType(): TypeMirror;
    getTargetTypeName(): string;
    isStatic(): boolean;
    setTargetName(arg0: string): void;
    shouldRemap(): boolean;
    toString(): string;
}