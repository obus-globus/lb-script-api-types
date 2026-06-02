import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { AnnotatedMixinElementHandler$AliasedElementName } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler$AliasedElementName.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
export class AnnotatedMixinElementHandler$ShadowElementName extends AnnotatedMixinElementHandler$AliasedElementName {
    constructor(arg0: Element, arg1: AnnotationHandle)
    // private baseName: string;
    // private hasPrefix: boolean;
    // private obfuscated: string;
    // private prefix: string;
    baseName(): string;
    hasPrefix(): boolean;
    name(): string;
    obfuscated(): string;
    prefix(arg0: string): string;
    setObfuscatedName(arg0: string): AnnotatedMixinElementHandler$ShadowElementName;
    toString(): string;
}