import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
import type { MethodHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/MethodHandle.d.ts'
export class AnnotatedMixinElementHandler$AliasedElementName extends Object {
    constructor(arg0: Element, arg1: AnnotationHandle)
    constructor(arg0: MethodHandle, arg1: AnnotationHandle)
    readonly aliases: string[];
    // private originalName: string;
    baseName(): string;
    getAliases(): string[];
    hasAliases(): boolean;
    hasPrefix(): boolean;
}