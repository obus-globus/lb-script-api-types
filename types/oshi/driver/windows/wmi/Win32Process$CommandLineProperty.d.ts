import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32Process$CommandLineProperty extends Enum<Win32Process$CommandLineProperty> {
    static COMMANDLINE: Win32Process$CommandLineProperty;
    static PROCESSID: Win32Process$CommandLineProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Win32Process$CommandLineProperty;
    static values(): (Object | null)[];
    private constructor()
    name(): "PROCESSID" | "COMMANDLINE";
}