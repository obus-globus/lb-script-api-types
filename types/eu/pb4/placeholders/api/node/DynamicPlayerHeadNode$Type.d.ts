import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DynamicPlayerHeadNode$Type extends Enum<DynamicPlayerHeadNode$Type> {
    static EITHER: DynamicPlayerHeadNode$Type;
    static NAME: DynamicPlayerHeadNode$Type;
    static UUID: DynamicPlayerHeadNode$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DynamicPlayerHeadNode$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "UUID" | "NAME" | "EITHER";
}