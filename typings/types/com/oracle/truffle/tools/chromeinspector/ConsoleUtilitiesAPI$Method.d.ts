import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ConsoleUtilitiesAPI$Method extends Enum<ConsoleUtilitiesAPI$Method> {
    static DEBUG: ConsoleUtilitiesAPI$Method;
    static UNDEBUG: ConsoleUtilitiesAPI$Method;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ConsoleUtilitiesAPI$Method;
    static values(): ConsoleUtilitiesAPI$Method[];
    private constructor(method: string)
    // private method: string;
    getMethod(): string;
    name(): "DEBUG" | "UNDEBUG";
}