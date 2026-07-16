import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Native$OS extends Enum<Native$OS> {
    static LINUX: Native$OS;
    static MAC: Native$OS;
    static SOLARIS: Native$OS;
    static WINDOWS: Native$OS;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Native$OS;
    static values(): Native$OS[];
    private constructor(arg2: string, arg3: string)
    libExtension: string;
    name: string;
}