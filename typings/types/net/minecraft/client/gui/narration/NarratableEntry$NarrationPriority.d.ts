import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class NarratableEntry$NarrationPriority extends Enum<NarratableEntry$NarrationPriority> {
    static FOCUSED: NarratableEntry$NarrationPriority;
    static HOVERED: NarratableEntry$NarrationPriority;
    static NONE: NarratableEntry$NarrationPriority;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): NarratableEntry$NarrationPriority;
    static values(): NarratableEntry$NarrationPriority[];
    private constructor()
    isTerminal(): boolean;
    name(): "NONE" | "HOVERED" | "FOCUSED";
}