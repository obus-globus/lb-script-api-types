import type { SelectInterest$Companion } from '../../../../io/ktor/network/selector/SelectInterest$Companion.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SelectInterest extends Enum<SelectInterest> {
    static ACCEPT: SelectInterest;
    static CONNECT: SelectInterest;
    static Companion: SelectInterest$Companion;
    static READ: SelectInterest;
    static WRITE: SelectInterest;
    static getEntries(): SelectInterest[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): SelectInterest;
    static values(): SelectInterest[];
    private constructor(flag: number)
    readonly flag: number;
    name(): "READ" | "WRITE" | "ACCEPT" | "CONNECT";
}