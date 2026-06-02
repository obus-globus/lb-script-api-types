import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32Processor$BitnessProperty extends Enum<Win32Processor$BitnessProperty> {
    static ADDRESSWIDTH: Win32Processor$BitnessProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Win32Processor$BitnessProperty;
    static values(): (Object | null)[];
    private constructor()
    name(): "ADDRESSWIDTH";
}