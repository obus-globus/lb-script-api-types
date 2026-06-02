import type { Interface$Remap } from '../../../../org/spongepowered/asm/mixin/Interface$Remap.d.ts'
import type { AnnotatedMixin } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixin.d.ts'
import type { AnnotatedMixinElementHandler } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler.d.ts'
import type { ObfuscationType } from '../../../../org/spongepowered/tools/obfuscation/ObfuscationType.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
import type { MethodHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/MethodHandle.d.ts'
import type { TypeHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class AnnotatedMixinElementHandlerSoftImplements extends AnnotatedMixinElementHandler {
    constructor(arg0: IMixinAnnotationProcessor, arg1: AnnotatedMixin)
    // private addInterfaceMethodMapping(arg0: Interface$Remap, arg1: TypeHandle, arg2: string, arg3: MethodHandle, arg4: string, arg5: string): void;
    // private applyPrefix(arg0: ObfuscationType[], arg1: string): ObfuscationType[];
    process(arg0: AnnotationHandle): void;
    // private processMethod(arg0: Interface$Remap, arg1: TypeHandle, arg2: string, arg3: MethodHandle): void;
    // private processSoftImplements(arg0: Interface$Remap, arg1: TypeHandle, arg2: string): void;
}