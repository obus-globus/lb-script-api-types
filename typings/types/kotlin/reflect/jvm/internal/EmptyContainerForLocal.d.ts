import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KDeclarationContainerImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl$Companion.d.ts'
import type { ConstructorDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/ConstructorDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { KmConstructor } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmConstructor.d.ts'
import type { KmFunction } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmFunction.d.ts'
import type { KmProperty } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { Name } from '../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { Regex } from '../../../../kotlin/text/Regex.d.ts'
export class EmptyContainerForLocal extends KDeclarationContainerImpl {
    static Companion: KDeclarationContainerImpl$Companion;
    static INSTANCE: EmptyContainerForLocal;
    static LOCAL_PROPERTY_SIGNATURE: Regex;
    // private fail(): void;
    getFunctions(name: Name): FunctionDescriptor[];
    getLocalPropertyDescriptor(index: number): PropertyDescriptor | null;
    getLocalPropertyMetadata(index: number): KmProperty | null;
    getProperties(name: Name): PropertyDescriptor[];
}