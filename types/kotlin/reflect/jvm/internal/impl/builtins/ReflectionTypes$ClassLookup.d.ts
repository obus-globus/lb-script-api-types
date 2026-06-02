import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KProperty } from '../../../../../../kotlin/reflect/KProperty.d.ts'
import type { ReflectionTypes } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/ReflectionTypes.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
export class ReflectionTypes$ClassLookup extends Object {
    constructor(arg0: number)
    // private numberOfTypeParameters: number;
    getValue(arg0: ReflectionTypes, arg1: KProperty<Object>): ClassDescriptor;
}