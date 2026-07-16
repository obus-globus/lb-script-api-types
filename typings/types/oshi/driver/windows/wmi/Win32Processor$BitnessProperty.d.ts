import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32Processor$BitnessProperty extends Enum<Win32Processor$BitnessProperty> {
    static ADDRESSWIDTH: Win32Processor$BitnessProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Win32Processor$BitnessProperty;
    static values(): Win32Processor$BitnessProperty[];
    private constructor()
    name(): "ADDRESSWIDTH";
}