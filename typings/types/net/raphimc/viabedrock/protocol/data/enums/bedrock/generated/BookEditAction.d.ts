import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class BookEditAction extends Enum<BookEditAction> {
    static AddPage: BookEditAction;
    static DeletePage: BookEditAction;
    static Finalize: BookEditAction;
    static ReplacePage: BookEditAction;
    static SwapPages: BookEditAction;
    static getByName(paramarg0: string): BookEditAction;
    static getByName(paramarg0: string, paramarg1: BookEditAction): BookEditAction;
    static getByValue(paramarg0: number): BookEditAction;
    static getByValue(paramarg0: number, paramarg1: BookEditAction): BookEditAction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BookEditAction;
    static values(): BookEditAction[];
    private constructor(arg2: number)
    private constructor(arg2: BookEditAction)
    readonly value: number;
    getValue(): number;
    name(): "ReplacePage" | "AddPage" | "DeletePage" | "SwapPages" | "Finalize";
}