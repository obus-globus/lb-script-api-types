import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FqNameUnsafe } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class RenderingUtilsKt extends Object {
    static render(paramarg0: FqNameUnsafe): string;
    static render(paramarg0: Name, paramarg1: boolean): string;
    static renderFlexibleMutabilityOrArrayElementVarianceType(paramarg0: string, paramarg1: string, paramarg2: () => string, paramarg3: () => string, paramarg4: (param0: Object) => string): string;
    static renderFqName(paramarg0: Name[]): string;
    static replacePrefixesInTypeRepresentations(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: string): string;
    static typeStringsDifferOnlyInNullability(paramarg0: string, paramarg1: string): boolean;
}