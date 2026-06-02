import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class DataDrivenScreenClosedReason extends Enum<DataDrivenScreenClosedReason> {
    static ClientCanceled: DataDrivenScreenClosedReason;
    static InvalidForm: DataDrivenScreenClosedReason;
    static ProgrammaticClose: DataDrivenScreenClosedReason;
    static ProgrammaticCloseAll: DataDrivenScreenClosedReason;
    static UserBusy: DataDrivenScreenClosedReason;
    static getByName(paramarg0: string): DataDrivenScreenClosedReason;
    static getByName(paramarg0: string, paramarg1: DataDrivenScreenClosedReason): DataDrivenScreenClosedReason;
    static getByValue(paramarg0: number): DataDrivenScreenClosedReason;
    static getByValue(paramarg0: number, paramarg1: DataDrivenScreenClosedReason): DataDrivenScreenClosedReason;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DataDrivenScreenClosedReason;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: DataDrivenScreenClosedReason)
    readonly value: number;
    getValue(): number;
    name(): "ProgrammaticClose" | "ProgrammaticCloseAll" | "ClientCanceled" | "UserBusy" | "InvalidForm";
}