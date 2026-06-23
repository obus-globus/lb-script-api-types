import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KFunction } from '../../../../kotlin/reflect/KFunction.d.ts'
import type { KProperty$Accessor } from '../../../../kotlin/reflect/KProperty$Accessor.d.ts'
import type { DescriptorKCallable } from '../../../../kotlin/reflect/jvm/internal/DescriptorKCallable.d.ts'
import type { DescriptorKProperty } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { PropertyAccessorDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyAccessorDescriptor.d.ts'
export abstract class DescriptorKProperty$Accessor<PropertyType extends unknown, ReturnType extends unknown> extends DescriptorKCallable<ReturnType> implements KFunction<ReturnType>, KProperty$Accessor<PropertyType> {
    constructor()
    readonly container: KDeclarationContainerImpl;
    readonly defaultCaller: Caller<any> | null;
    readonly descriptor: PropertyAccessorDescriptor;
    /*not mapped: */ isExternal(): boolean;
    /*not mapped: */ isInfix(): boolean;
    /*not mapped: */ isInline(): boolean;
    /*not mapped: */ isOperator(): boolean;
    /*not mapped: */ isSuspend(): boolean;
    readonly property: DescriptorKProperty<PropertyType>;
    readonly rawBoundReceiver: Object | null;
}