import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LightLayer extends Enum<LightLayer> {
    static BLOCK: LightLayer;
    static SKY: LightLayer;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LightLayer;
    static values(): LightLayer[];
    private constructor()
    name(): "SKY" | "BLOCK";
}