import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KFunction } from '../../../../kotlin/reflect/KFunction.d.ts'
import type { KProperty$Accessor } from '../../../../kotlin/reflect/KProperty$Accessor.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVisibility } from '../../../../kotlin/reflect/KVisibility.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KotlinKCallable } from '../../../../kotlin/reflect/jvm/internal/KotlinKCallable.d.ts'
import type { KotlinKProperty } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { KmPropertyAccessorAttributes } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmPropertyAccessorAttributes.d.ts'
import type { Modality } from '../../../../kotlin/reflect/jvm/internal/impl/km/Modality.d.ts'
export abstract class KotlinKProperty$Accessor<PropertyType extends unknown, ReturnType extends unknown> extends KotlinKCallable<ReturnType> implements KFunction<ReturnType>, KProperty$Accessor<PropertyType> {
    constructor()
    readonly accessor: KmPropertyAccessorAttributes | null;
    readonly annotations: Annotation[];
    readonly callerWithDefaults: Caller<any> | null;
    readonly container: KDeclarationContainerImpl;
    /*not mapped: */ isExternal(): boolean;
    /*not mapped: */ isInfix(): boolean;
    /*not mapped: */ isInline(): boolean;
    /*not mapped: */ isOperator(): boolean;
    /*not mapped: */ isSuspend(): boolean;
    readonly modality: Modality;
    readonly property: KotlinKProperty<PropertyType>;
    readonly rawBoundReceiver: Object | null;
    readonly typeParameters: KTypeParameter[];
    readonly visibility: KVisibility | null;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): ReflectKCallable<ReturnType>;
}