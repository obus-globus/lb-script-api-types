import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FunctionTypeKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionTypeKind.d.ts'
import type { FunctionTypeKindExtractor$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionTypeKindExtractor$Companion.d.ts'
import type { FunctionTypeKindExtractor$KindWithArity } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionTypeKindExtractor$KindWithArity.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class FunctionTypeKindExtractor extends Object {
    static Companion: FunctionTypeKindExtractor$Companion;
    constructor(arg0: FunctionTypeKind[])
    // private kinds: FunctionTypeKind[];
    // private knownKindsByPackageFqName: Map<FqName, FunctionTypeKind[]>;
    getFunctionalClassKind(arg0: FqName, arg1: string): FunctionTypeKind;
    getFunctionalClassKindWithArity(arg0: FqName, arg1: string): FunctionTypeKindExtractor$KindWithArity;
    // private toInt(arg0: string): number;
}