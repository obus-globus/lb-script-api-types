import type { Input } from '../../../../ai/djl/modality/Input.d.ts'
import type { Output } from '../../../../ai/djl/modality/Output.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TypeConverter<I extends unknown, O extends unknown> extends Object{
    fromOutput(arg0: Output): O;
    getSupportedType(): Pair<Type, Type>;
    toInput(arg0: I): Input;
}