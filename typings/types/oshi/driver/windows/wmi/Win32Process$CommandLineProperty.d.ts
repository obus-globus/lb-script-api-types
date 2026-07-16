import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32Process$CommandLineProperty extends Enum<Win32Process$CommandLineProperty> {
    static COMMANDLINE: Win32Process$CommandLineProperty;
    static PROCESSID: Win32Process$CommandLineProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Win32Process$CommandLineProperty;
    static values(): Win32Process$CommandLineProperty[];
    private constructor()
    name(): "PROCESSID" | "COMMANDLINE";
}