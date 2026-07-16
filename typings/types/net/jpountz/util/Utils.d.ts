import type { Class } from '../../../java/lang/Class.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Utils extends Enum<Utils> {
    static NATIVE_BYTE_ORDER: ByteOrder;
    static isUnalignedAccessAllowed(): boolean;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Utils;
    static values(): Utils[];
    private constructor()
}