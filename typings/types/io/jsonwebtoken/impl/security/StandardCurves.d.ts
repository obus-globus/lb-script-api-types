import type { Identifiable } from '../../../../io/jsonwebtoken/Identifiable.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Curve } from '../../../../io/jsonwebtoken/security/Curve.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
export class StandardCurves {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static FN: Function<Identifiable, string>;
    static findByKey(paramarg0: Key): Curve;
    static fn<T extends Identifiable>(): Function<T, string>;
}