import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IMapping } from '../../../../org/spongepowered/asm/obfuscation/mapping/IMapping.d.ts'
import type { MappingMethod } from '../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { AnnotatedMixinElementHandlerShadow } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandlerShadow.d.ts'
import type { AnnotatedMixinElementHandlerShadow$AnnotatedElementShadow } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandlerShadow$AnnotatedElementShadow.d.ts'
import type { ObfuscationType } from '../../../../org/spongepowered/tools/obfuscation/ObfuscationType.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
import type { TypeHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class AnnotatedMixinElementHandlerShadow$AnnotatedElementShadowMethod extends AnnotatedMixinElementHandlerShadow$AnnotatedElementShadow<ExecutableElement, MappingMethod> {
    constructor(null_: AnnotatedMixinElementHandlerShadow, arg1: ExecutableElement, arg2: AnnotationHandle, arg3: boolean)
    addMapping(arg0: ObfuscationType, arg1: IMapping<Object>): void;
    getMapping(arg0: TypeHandle, arg1: string, arg2: string): MappingMethod;
    shouldRemap(): boolean;
}