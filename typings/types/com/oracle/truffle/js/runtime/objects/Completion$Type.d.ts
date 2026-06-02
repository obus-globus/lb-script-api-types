import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Completion$Type extends Enum<Completion$Type> {
    static Normal: Completion$Type;
    static Return: Completion$Type;
    static Throw: Completion$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Completion$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "Normal" | "Return" | "Throw";
}