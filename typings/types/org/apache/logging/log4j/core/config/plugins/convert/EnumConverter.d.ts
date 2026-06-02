import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class EnumConverter<E extends Enum<E>> extends Object implements TypeConverter<E> {
    constructor(clazz: Class<E>)
    // private clazz: Class<E>;
    convert(s: string): E;
}