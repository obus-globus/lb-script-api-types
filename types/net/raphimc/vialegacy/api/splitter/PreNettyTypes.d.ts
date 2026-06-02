import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PreNettyTypes extends Object {
    static readByteArray(paramarg0: ByteBuf): void;
    static readByteArray1024(paramarg0: ByteBuf): void;
    static readEntityDataList1_4_2(paramarg0: ByteBuf): void;
    static readEntityDataList1_4_4(paramarg0: ByteBuf): void;
    static readEntityDataListb1_2(paramarg0: ByteBuf): void;
    static readEntityDataListb1_3(paramarg0: ByteBuf): void;
    static readEntityDataListb1_5(paramarg0: ByteBuf): void;
    static readItemStack1_0(paramarg0: ByteBuf): void;
    static readItemStack1_3_1(paramarg0: ByteBuf): void;
    static readItemStackb1_1(paramarg0: ByteBuf): void;
    static readItemStackb1_2(paramarg0: ByteBuf): void;
    static readString(paramarg0: ByteBuf): void;
    static readString64(paramarg0: ByteBuf): void;
    static readTag(paramarg0: ByteBuf): void;
    static readUTF(paramarg0: ByteBuf): void;
    constructor()
}