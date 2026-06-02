import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32Processor$VoltProperty extends Enum<Win32Processor$VoltProperty> {
    static CURRENTVOLTAGE: Win32Processor$VoltProperty;
    static VOLTAGECAPS: Win32Processor$VoltProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Win32Processor$VoltProperty;
    static values(): (Object | null)[];
    private constructor()
    name(): "CURRENTVOLTAGE" | "VOLTAGECAPS";
}