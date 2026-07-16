import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32Processor$ProcessorIdProperty extends Enum<Win32Processor$ProcessorIdProperty> {
    static PROCESSORID: Win32Processor$ProcessorIdProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Win32Processor$ProcessorIdProperty;
    static values(): Win32Processor$ProcessorIdProperty[];
    private constructor()
    name(): "PROCESSORID";
}