import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Environment extends Enum<Environment> {
    static END: Environment;
    static NETHER: Environment;
    static NORMAL: Environment;
    static getEnvironmentById(paramarg0: number): Environment;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Environment;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private id: number;
    id(): number;
    name(): "NORMAL" | "NETHER" | "END";
}