import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SandboxContext$TimeUnit extends Enum<SandboxContext$TimeUnit> {
    static DAY: SandboxContext$TimeUnit;
    static HOUR: SandboxContext$TimeUnit;
    static MILLIS: SandboxContext$TimeUnit;
    static MINUTE: SandboxContext$TimeUnit;
    static SECOND: SandboxContext$TimeUnit;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SandboxContext$TimeUnit;
    static values(): SandboxContext$TimeUnit[];
    private constructor(symbol: string, factor: number)
    // private factor: number;
    // private symbol: string;
    name(): "DAY" | "HOUR" | "MINUTE" | "SECOND" | "MILLIS";
}