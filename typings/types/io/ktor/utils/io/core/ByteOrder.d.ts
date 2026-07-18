import type { ByteOrder$Companion } from '../../../../../io/ktor/utils/io/core/ByteOrder$Companion.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ByteOrder as ByteOrder_2 } from '../../../../../java/nio/ByteOrder.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ByteOrder extends Enum<ByteOrder> {
    static BIG_ENDIAN: ByteOrder;
    static Companion: ByteOrder$Companion;
    static LITTLE_ENDIAN: ByteOrder;
    static getEntries(): ByteOrder[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ByteOrder;
    static values(): ByteOrder[];
    private constructor(nioOrder: ByteOrder_2)
    readonly nioOrder: ByteOrder_2;
    name(): "BIG_ENDIAN" | "LITTLE_ENDIAN";
}