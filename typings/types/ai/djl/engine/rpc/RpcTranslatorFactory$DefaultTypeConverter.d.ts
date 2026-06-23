import type { TypeConverter } from '../../../../ai/djl/engine/rpc/TypeConverter.d.ts'
import type { Input } from '../../../../ai/djl/modality/Input.d.ts'
import type { Output } from '../../../../ai/djl/modality/Output.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RpcTranslatorFactory$DefaultTypeConverter<I extends unknown, O extends unknown> extends Object implements TypeConverter<I, O> {
    constructor(arg0: Class<I>, arg1: Class<O>)
    // private fromJson: Method;
    // private fromJsonStream: Method;
    // private input: Class<I>;
    // private output: Class<O>;
    fromOutput(arg0: Output): O;
    getSupportedType(): Pair<Type, Type>;
    toInput(arg0: I): Input;
}