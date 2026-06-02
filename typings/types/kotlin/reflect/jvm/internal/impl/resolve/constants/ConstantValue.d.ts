import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export abstract class ConstantValue<T extends Object | number | string | boolean> extends Object {
    constructor(arg0: T)
    readonly value: T;
    equals(arg0: Object | null): boolean;
    getType(arg0: ModuleDescriptor): KotlinType;
    getValue(): T;
    hashCode(): number;
    toString(): string;
}