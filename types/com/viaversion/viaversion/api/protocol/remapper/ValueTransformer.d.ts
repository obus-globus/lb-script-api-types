import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ValueWriter } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/ValueWriter.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ValueTransformer<T1 extends Object | number | string | boolean, T2 extends Object | number | string | boolean> extends Object implements ValueWriter<T1> {
    constructor(arg0: Type<T1>, arg1: Type<T2>)
    constructor(arg0: Type<T2>)
    readonly inputType: Type<T1>;
    readonly outputType: Type<T2>;
    getInputType(): Type<T1>;
    getOutputType(): Type<T2>;
    transform(arg0: PacketWrapper, arg1: T1): T2;
    write(arg0: PacketWrapper, arg1: T1): void;
}