import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface EntityDataType extends Object{
    type(): Type<Object>;
    typeId(): number;
}