import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class CentralProcessor$TickType extends Enum<CentralProcessor$TickType> {
    static IDLE: CentralProcessor$TickType;
    static IOWAIT: CentralProcessor$TickType;
    static IRQ: CentralProcessor$TickType;
    static NICE: CentralProcessor$TickType;
    static SOFTIRQ: CentralProcessor$TickType;
    static STEAL: CentralProcessor$TickType;
    static SYSTEM: CentralProcessor$TickType;
    static USER: CentralProcessor$TickType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CentralProcessor$TickType;
    static values(): CentralProcessor$TickType[];
    private constructor(arg2: number)
    readonly index: number;
    getIndex(): number;
    name(): "USER" | "NICE" | "SYSTEM" | "IDLE" | "IOWAIT" | "IRQ" | "SOFTIRQ" | "STEAL";
}