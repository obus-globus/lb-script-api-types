import type { LibCAPI$size_t } from '../../../../../com/sun/jna/platform/unix/LibCAPI$size_t.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class LibCAPI$size_t$ByReference extends ByReference {
    constructor()
    constructor(arg0: LibCAPI$size_t)
    constructor(arg0: number)
    getValue(): LibCAPI$size_t;
    longValue(): number;
    setValue(arg0: LibCAPI$size_t): void;
    setValue(arg0: number): void;
}