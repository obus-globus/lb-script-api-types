import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeRegistry } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/TypeRegistry.d.ts'
export class TypeAttributes$Companion extends TypeRegistry<TypeAttribute<any>, TypeAttribute<any>> {
    private constructor()
    constructor(arg0: DefaultConstructorMarker)
    create(arg0: TypeAttribute<any>[]): TypeAttribute<any>[];
    customComputeIfAbsent(arg0: { [key: string]: number }, arg1: string, arg2: (param0: string) => number): number;
    getEmpty(): TypeAttribute<any>[];
}