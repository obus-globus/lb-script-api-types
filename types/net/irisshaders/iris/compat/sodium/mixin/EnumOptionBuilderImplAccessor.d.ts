import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export interface EnumOptionBuilderImplAccessor<E extends Enum<E>> extends Object{
    getEnumClass(): Class<E>;
}