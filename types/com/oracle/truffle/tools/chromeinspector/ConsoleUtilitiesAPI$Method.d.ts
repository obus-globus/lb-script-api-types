import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ConsoleUtilitiesAPI$Method extends Enum<ConsoleUtilitiesAPI$Method> {
    static DEBUG: ConsoleUtilitiesAPI$Method;
    static UNDEBUG: ConsoleUtilitiesAPI$Method;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ConsoleUtilitiesAPI$Method;
    static values(): (Object | null)[];
    private constructor(method: string)
    // private method: string;
    getMethod(): string;
    name(): "DEBUG" | "UNDEBUG";
}