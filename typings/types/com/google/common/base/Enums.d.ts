import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Enums extends Object {
    static getField(paramenumValue: Enum<any>): Field;
    static getIfPresent(paramenumClass: Class<Object>, paramvalue: string): Optional<Object>;
    static stringConverter(paramenumClass: Class<Object>): Converter<string, Object>;
    private constructor()
}