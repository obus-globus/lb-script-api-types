import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../../kotlin/Lazy.d.ts'
import type { ReflectionTypes$ClassLookup } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/ReflectionTypes$ClassLookup.d.ts'
import type { ReflectionTypes$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/ReflectionTypes$Companion.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { NotFoundClasses } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/NotFoundClasses.d.ts'
import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
export class ReflectionTypes extends Object {
    static Companion: ReflectionTypes$Companion;
    constructor(arg0: ModuleDescriptor, arg1: NotFoundClasses)
    // private kClass$delegate: ReflectionTypes$ClassLookup;
    // private kMutableProperty0$delegate: ReflectionTypes$ClassLookup;
    // private kMutableProperty1$delegate: ReflectionTypes$ClassLookup;
    // private kMutableProperty2$delegate: ReflectionTypes$ClassLookup;
    // private kProperty$delegate: ReflectionTypes$ClassLookup;
    // private kProperty0$delegate: ReflectionTypes$ClassLookup;
    // private kProperty1$delegate: ReflectionTypes$ClassLookup;
    // private kProperty2$delegate: ReflectionTypes$ClassLookup;
    // private kotlinReflectScope$delegate: Lazy<Object>;
    // private notFoundClasses: NotFoundClasses;
    // private find(arg0: string, arg1: number): ClassDescriptor;
    getKClass(): ClassDescriptor;
    // private getKotlinReflectScope(): MemberScope;
}