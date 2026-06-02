import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IMapping } from '../../../../org/spongepowered/asm/obfuscation/mapping/IMapping.d.ts'
import type { IMapping$Type } from '../../../../org/spongepowered/asm/obfuscation/mapping/IMapping$Type.d.ts'
import type { AnnotatedMixinElementHandler$AnnotatedElement } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler$AnnotatedElement.d.ts'
import type { AnnotatedMixinElementHandler$ShadowElementName } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandler$ShadowElementName.d.ts'
import type { ObfuscationType } from '../../../../org/spongepowered/tools/obfuscation/ObfuscationType.d.ts'
import type { IObfuscationDataProvider } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IObfuscationDataProvider.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
import type { TypeHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export abstract class AnnotatedMixinElementHandlerShadow$AnnotatedElementShadow<E extends Element, M extends IMapping<M>> extends AnnotatedMixinElementHandler$AnnotatedElement<E> {
    constructor(arg0: E, arg1: AnnotationHandle, arg2: boolean, arg3: IMapping$Type)
    readonly name: AnnotatedMixinElementHandler$ShadowElementName;
    // private shouldRemap: boolean;
    // private type: IMapping$Type;
    addMapping(arg0: ObfuscationType, arg1: IMapping<Object>): void;
    getElementType(): IMapping$Type;
    getMapping(arg0: TypeHandle, arg1: string, arg2: string): M;
    getName(): AnnotatedMixinElementHandler$ShadowElementName;
    getObfuscationData(arg0: IObfuscationDataProvider, arg1: TypeHandle): ObfuscationType[];
    setObfuscatedName(arg0: string): AnnotatedMixinElementHandler$ShadowElementName;
    setObfuscatedName(arg0: IMapping<Object>): AnnotatedMixinElementHandler$ShadowElementName;
    shouldRemap(): boolean;
    toString(): string;
}