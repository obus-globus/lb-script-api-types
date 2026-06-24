import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ToggleValue extends Enum<ToggleValue> {
    static DISABLED: ToggleValue;
    static ENABLED: ToggleValue;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ToggleValue;
    static values(): (Object | null)[];
    private constructor()
    isDisabled(): boolean;
    isEnabled(): boolean;
    name(): "DISABLED" | "ENABLED";
}