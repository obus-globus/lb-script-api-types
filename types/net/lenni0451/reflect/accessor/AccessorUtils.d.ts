import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BytecodeBuilder } from '../../../../net/lenni0451/reflect/bytecode/builder/BytecodeBuilder.d.ts'
import type { ClassBuilder } from '../../../../net/lenni0451/reflect/bytecode/builder/ClassBuilder.d.ts'
export class AccessorUtils extends Object {
    static addConstructor(paramarg0: BytecodeBuilder, paramarg1: ClassBuilder, paramarg2: () => Object | null, paramarg3: boolean): void;
    static makeAccessorName(paramarg0: string, paramarg1: Class<Object>, paramarg2: string): string;
    constructor()
}