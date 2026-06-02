import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KFunction } from '../../../../kotlin/reflect/KFunction.d.ts'
import type { KProperty$Accessor } from '../../../../kotlin/reflect/KProperty$Accessor.d.ts'
import type { DescriptorKCallable } from '../../../../kotlin/reflect/jvm/internal/DescriptorKCallable.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export abstract class DescriptorKProperty$Accessor<PropertyType extends Object | number | string | boolean, ReturnType extends Object | number | string | boolean> extends DescriptorKCallable<ReturnType> implements KFunction<ReturnType>, KProperty$Accessor<PropertyType> {
    constructor()
}