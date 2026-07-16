import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Environment extends Enum<Environment> {
    static END: Environment;
    static NETHER: Environment;
    static NORMAL: Environment;
    static getEnvironmentById(paramarg0: number): Environment;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Environment;
    static values(): Environment[];
    private constructor(arg2: number)
    // private id: number;
    id(): number;
    name(): "NORMAL" | "NETHER" | "END";
}