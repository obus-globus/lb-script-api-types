import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { EnumType$Fallback } from '../../../../../../com/viaversion/viaversion/api/type/types/EnumType$Fallback.d.ts'
import type { VarIntType } from '../../../../../../com/viaversion/viaversion/api/type/types/VarIntType.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class EnumType extends VarIntType {
    static varIntLength(paramarg0: number): number;
    constructor(arg0: EnumType$Fallback, ...arg1: string[])
    constructor(...arg0: string[])
    // private fallback: EnumType$Fallback;
    // private names: string[];
    idFromName(arg0: string): number;
    nameFromId(arg0: number): string;
    names(): string[];
    write(arg0: Ops, arg1: number): void;
    write(arg0: ByteBuf, arg1: number): void;
}