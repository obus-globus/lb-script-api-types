import type { AnnotatedMixin } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixin.d.ts'
import type { AnnotatedMixinElementHandler } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler.d.ts'
import type { AnnotatedMixinElementHandlerOverwrite$AnnotatedElementOverwrite } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandlerOverwrite$AnnotatedElementOverwrite.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { MethodHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/MethodHandle.d.ts'
import type { TypeHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class AnnotatedMixinElementHandlerOverwrite extends AnnotatedMixinElementHandler {
    constructor(arg0: IMixinAnnotationProcessor, arg1: AnnotatedMixin)
    registerMerge(arg0: MethodHandle): void;
    registerOverwrite(arg0: AnnotatedMixinElementHandlerOverwrite$AnnotatedElementOverwrite): void;
    // private registerOverwriteForTarget(arg0: AnnotatedMixinElementHandlerOverwrite$AnnotatedElementOverwrite, arg1: TypeHandle): boolean;
}