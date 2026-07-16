import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolygonMode extends Enum<PolygonMode> {
    static FILL: PolygonMode;
    static WIREFRAME: PolygonMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PolygonMode;
    static values(): PolygonMode[];
    private constructor()
    name(): "FILL" | "WIREFRAME";
}