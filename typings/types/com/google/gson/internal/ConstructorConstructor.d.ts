import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { InstanceCreator } from '../../../../com/google/gson/InstanceCreator.d.ts'
import type { ReflectionAccessFilter } from '../../../../com/google/gson/ReflectionAccessFilter.d.ts'
import type { ObjectConstructor } from '../../../../com/google/gson/internal/ObjectConstructor.d.ts'
import type { TypeToken } from '../../../../com/google/gson/reflect/TypeToken.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConstructorConstructor extends Object {
    constructor(arg0: JavaMap<Type, InstanceCreator<Object>>, arg1: boolean, arg2: ReflectionAccessFilter[])
    // private instanceCreators: JavaMap<Type, InstanceCreator<Object>>;
    // private reflectionFilters: ReflectionAccessFilter[];
    // private useJdkUnsafe: boolean;
    get<T extends unknown>(arg0: TypeToken<T>): ObjectConstructor<T>;
    get<T extends unknown>(arg0: TypeToken<T>, arg1: boolean): ObjectConstructor<T>;
    // private newUnsafeAllocator<T extends unknown>(arg0: Class<T>): ObjectConstructor<T>;
    toString(): string;
}