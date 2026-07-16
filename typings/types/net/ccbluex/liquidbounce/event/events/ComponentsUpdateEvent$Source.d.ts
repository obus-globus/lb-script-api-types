import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ComponentsUpdateEvent$Source extends Enum<ComponentsUpdateEvent$Source> {
    static NATIVE: ComponentsUpdateEvent$Source;
    static THEME: ComponentsUpdateEvent$Source;
    static getEntries(): ComponentsUpdateEvent$Source[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ComponentsUpdateEvent$Source;
    static values(): ComponentsUpdateEvent$Source[];
    private constructor()
    name(): "NATIVE" | "THEME";
}