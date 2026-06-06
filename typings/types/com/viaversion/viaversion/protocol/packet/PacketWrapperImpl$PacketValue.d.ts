import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PacketWrapperImpl$PacketValue<T extends Object | number | string | boolean> extends Object {
    private constructor(arg0: Type<T>, arg1: T)
    // private type: Type<T>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    setValue(arg0: T): void;
    toString(): string;
    type(): Type<T>;
    value(): Object;
    write(arg0: ByteBuf): void;
}