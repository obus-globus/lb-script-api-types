import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class NarratableEntry$NarrationPriority extends Enum<NarratableEntry$NarrationPriority> {
    static FOCUSED: NarratableEntry$NarrationPriority;
    static HOVERED: NarratableEntry$NarrationPriority;
    static NONE: NarratableEntry$NarrationPriority;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): NarratableEntry$NarrationPriority;
    static values(): (Object | null)[];
    private constructor()
    isTerminal(): boolean;
    name(): "NONE" | "HOVERED" | "FOCUSED";
}