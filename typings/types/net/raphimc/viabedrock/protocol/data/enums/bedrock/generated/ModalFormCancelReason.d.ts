import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ModalFormCancelReason extends Enum<ModalFormCancelReason> {
    static UserBusy: ModalFormCancelReason;
    static UserClosed: ModalFormCancelReason;
    static getByName(paramarg0: string): ModalFormCancelReason;
    static getByName(paramarg0: string, paramarg1: ModalFormCancelReason): ModalFormCancelReason;
    static getByValue(paramarg0: number): ModalFormCancelReason;
    static getByValue(paramarg0: number, paramarg1: ModalFormCancelReason): ModalFormCancelReason;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ModalFormCancelReason;
    static values(): ModalFormCancelReason[];
    private constructor(arg2: number)
    private constructor(arg2: ModalFormCancelReason)
    readonly value: number;
    getValue(): number;
    name(): "UserClosed" | "UserBusy";
}