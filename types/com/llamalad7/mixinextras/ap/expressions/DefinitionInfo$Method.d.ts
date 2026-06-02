import type { DefinitionInfo } from '../../../../../com/llamalad7/mixinextras/ap/expressions/DefinitionInfo.d.ts'
import type { ProcessingEnvironment } from '../../../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { ExecutableElement } from '../../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { TypeElement } from '../../../../../javax/lang/model/element/TypeElement.d.ts'
import type { AnnotationHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
export class DefinitionInfo$Method extends DefinitionInfo {
    constructor(arg0: ProcessingEnvironment, arg1: TypeElement, arg2: ExecutableElement, arg3: AnnotationHandle, arg4: string, arg5: boolean)
}