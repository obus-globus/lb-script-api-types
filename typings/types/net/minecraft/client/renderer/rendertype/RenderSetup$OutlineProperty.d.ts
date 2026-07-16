import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class RenderSetup$OutlineProperty extends Enum<RenderSetup$OutlineProperty> {
    static AFFECTS_OUTLINE: RenderSetup$OutlineProperty;
    static IS_OUTLINE: RenderSetup$OutlineProperty;
    static NONE: RenderSetup$OutlineProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RenderSetup$OutlineProperty;
    static values(): RenderSetup$OutlineProperty[];
    private constructor(name: string)
    // private name: string;
    toString(): string;
    name(): "NONE" | "IS_OUTLINE" | "AFFECTS_OUTLINE";
}