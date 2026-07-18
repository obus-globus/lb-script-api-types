import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AbstractHttp2StreamChannel$ReadStatus extends Enum<AbstractHttp2StreamChannel$ReadStatus> {
    static IDLE: AbstractHttp2StreamChannel$ReadStatus;
    static IN_PROGRESS: AbstractHttp2StreamChannel$ReadStatus;
    static REQUESTED: AbstractHttp2StreamChannel$ReadStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AbstractHttp2StreamChannel$ReadStatus;
    static values(): AbstractHttp2StreamChannel$ReadStatus[];
    private constructor()
    name(): "IDLE" | "IN_PROGRESS" | "REQUESTED";
}