import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolygonMode extends Enum<PolygonMode> {
    static FILL: PolygonMode;
    static WIREFRAME: PolygonMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PolygonMode;
    static values(): PolygonMode[];
    private constructor()
    name(): "FILL" | "WIREFRAME";
}