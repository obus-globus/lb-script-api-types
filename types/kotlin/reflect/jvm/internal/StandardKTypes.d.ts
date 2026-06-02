import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
export class StandardKTypes extends Object {
    static INSTANCE: StandardKTypes;
    readonly ANY: KType;
    readonly CLONEABLE: KType;
    readonly NULLABLE_ANY: KType;
    readonly SERIALIZABLE: KType;
}