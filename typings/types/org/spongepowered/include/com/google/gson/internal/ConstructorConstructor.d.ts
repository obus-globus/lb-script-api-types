import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { InstanceCreator } from '../../../../../../../org/spongepowered/include/com/google/gson/InstanceCreator.d.ts'
import type { ObjectConstructor } from '../../../../../../../org/spongepowered/include/com/google/gson/internal/ObjectConstructor.d.ts'
import type { TypeToken } from '../../../../../../../org/spongepowered/include/com/google/gson/reflect/TypeToken.d.ts'
export class ConstructorConstructor extends Object {
    constructor(arg0: Map<Type, InstanceCreator<Object>>)
    // private instanceCreators: Map<Type, InstanceCreator<Object>>;
    get<T extends unknown>(arg0: TypeToken<T>): ObjectConstructor<T>;
    // private newDefaultConstructor<T extends unknown>(arg0: Class<T>): ObjectConstructor<T>;
    // private newDefaultImplementationConstructor<T extends unknown>(arg0: Type, arg1: Class<T>): ObjectConstructor<T>;
    // private newUnsafeAllocator<T extends unknown>(arg0: Type, arg1: Class<T>): ObjectConstructor<T>;
    toString(): string;
}