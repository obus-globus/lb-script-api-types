import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Completion$Type extends Enum<Completion$Type> {
    static Normal: Completion$Type;
    static Return: Completion$Type;
    static Throw: Completion$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Completion$Type;
    static values(): Completion$Type[];
    private constructor()
    name(): "Normal" | "Return" | "Throw";
}