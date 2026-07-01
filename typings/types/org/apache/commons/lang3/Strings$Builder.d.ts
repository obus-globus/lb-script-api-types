import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Strings } from '../../../../org/apache/commons/lang3/Strings.d.ts'
import type { AbstractSupplier } from '../../../../org/apache/commons/lang3/builder/AbstractSupplier.d.ts'
import type { FailableSupplier } from '../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class Strings$Builder extends AbstractSupplier<Strings, Strings$Builder, RuntimeException> {
    static NUL: () => Object | null;
    constructor(arg0: any)
    // private ignoreCase: boolean;
    // private nullIsLess: boolean;
    get(): Strings;
    setIgnoreCase(arg0: boolean): Strings$Builder;
    setNullIsLess(arg0: boolean): Strings$Builder;
}