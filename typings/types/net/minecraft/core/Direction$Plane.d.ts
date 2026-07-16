import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../net/minecraft/core/Direction.d.ts'
export class Direction$Plane {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static HORIZONTAL: Direction[];
    static VERTICAL: Direction[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Direction[];
    static values(): Direction[][];
}