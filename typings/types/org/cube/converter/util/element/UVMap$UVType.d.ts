import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class UVMap$UVType extends Enum<UVMap$UVType> {
    static BOX: UVMap$UVType;
    static PERFACE: UVMap$UVType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): UVMap$UVType;
    static values(): UVMap$UVType[];
    private constructor()
    name(): "PERFACE" | "BOX";
}