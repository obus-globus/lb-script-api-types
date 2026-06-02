import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { VariableElement } from '../../../../javax/lang/model/element/VariableElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ITargetSelector } from '../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
import type { AnnotatedMixin } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixin.d.ts'
import type { AnnotatedMixinElementHandler$AliasedElementName } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler$AliasedElementName.d.ts'
import type { AnnotatedMixinElementHandler$AnnotatedElementExecutable } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler$AnnotatedElementExecutable.d.ts'
import type { AnnotatedMixinElementHandler$ShadowElementName } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler$ShadowElementName.d.ts'
import type { ObfuscationType } from '../../../../org/spongepowered/tools/obfuscation/ObfuscationType.d.ts'
import type { SuppressedBy } from '../../../../org/spongepowered/tools/obfuscation/SuppressedBy.d.ts'
import type { IMessagerEx$MessageType } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerEx$MessageType.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { IObfuscationManager } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IObfuscationManager.d.ts'
import type { IMappingConsumer } from '../../../../org/spongepowered/tools/obfuscation/mapping/IMappingConsumer.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
import type { MethodHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/MethodHandle.d.ts'
import type { TypeHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export abstract class AnnotatedMixinElementHandler extends Object {
    constructor(arg0: IMixinAnnotationProcessor, arg1: AnnotatedMixin)
    // private ap: IMixinAnnotationProcessor;
    // private classRef: string;
    // private mappings: IMappingConsumer;
    // private mixin: AnnotatedMixin;
    // private obf: IObfuscationManager;
    addFieldMapping(arg0: ObfuscationType, arg1: string, arg2: string, arg3: string, arg4: string): void;
    addFieldMapping(arg0: ObfuscationType, arg1: AnnotatedMixinElementHandler$ShadowElementName, arg2: string, arg3: string): void;
    addMethodMapping(arg0: ObfuscationType, arg1: string, arg2: string, arg3: string, arg4: string): void;
    addMethodMapping(arg0: ObfuscationType, arg1: AnnotatedMixinElementHandler$ShadowElementName, arg2: string, arg3: string): void;
    addMethodMappings(arg0: string, arg1: string, arg2: ObfuscationType[]): void;
    checkConstraints(arg0: ExecutableElement, arg1: AnnotationHandle): void;
    // private getMappings(): IMappingConsumer;
    // private printMessage(arg0: IMessagerEx$MessageType, arg1: string, arg2: Element, arg3: AnnotationHandle, arg4: SuppressedBy): void;
    // private validateMethodVisibility(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: string, arg3: TypeHandle, arg4: MethodHandle): void;
    validateReferencedTarget(arg0: AnnotatedMixinElementHandler$AnnotatedElementExecutable, arg1: string, arg2: ITargetSelector, arg3: string): void;
    validateTarget(arg0: Element, arg1: AnnotationHandle, arg2: AnnotatedMixinElementHandler$AliasedElementName, arg3: string): void;
    validateTargetField(arg0: VariableElement, arg1: AnnotationHandle, arg2: AnnotatedMixinElementHandler$AliasedElementName, arg3: string): void;
    validateTargetMethod(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: AnnotatedMixinElementHandler$AliasedElementName, arg3: string, arg4: boolean, arg5: boolean): void;
}