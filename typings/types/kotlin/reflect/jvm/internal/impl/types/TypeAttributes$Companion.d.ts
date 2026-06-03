import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeRegistry } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/TypeRegistry.d.ts'
export class TypeAttributes$Companion extends TypeRegistry<TypeAttribute<Object>, TypeAttribute<Object>> {
    private constructor()
    create(arg0: TypeAttribute<Object>[]): TypeAttribute<Object>[];
    customComputeIfAbsent(arg0: { [key: string]: number }, arg1: string, arg2: (param0: string) => number): number;
    getEmpty(): TypeAttribute<Object>[];
}