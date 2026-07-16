import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Component$BaselineResizeBehavior extends Enum<Component$BaselineResizeBehavior> {
    static CENTER_OFFSET: Component$BaselineResizeBehavior;
    static CONSTANT_ASCENT: Component$BaselineResizeBehavior;
    static CONSTANT_DESCENT: Component$BaselineResizeBehavior;
    static OTHER: Component$BaselineResizeBehavior;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Component$BaselineResizeBehavior;
    static values(): Component$BaselineResizeBehavior[];
    private constructor()
    name(): "CONSTANT_ASCENT" | "CONSTANT_DESCENT" | "CENTER_OFFSET" | "OTHER";
}