import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DumperOptions$FlowStyle extends Enum<DumperOptions$FlowStyle> {
    static AUTO: DumperOptions$FlowStyle;
    static BLOCK: DumperOptions$FlowStyle;
    static FLOW: DumperOptions$FlowStyle;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DumperOptions$FlowStyle;
    static values(): DumperOptions$FlowStyle[];
    private constructor(arg2: boolean)
    // private styleBoolean: boolean;
    toString(): string;
    name(): "FLOW" | "BLOCK" | "AUTO";
}