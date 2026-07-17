import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class PistonType extends Enum<PistonType> implements StringRepresentable {
    static DEFAULT: PistonType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STICKY: PistonType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PistonType;
    static values(): PistonType[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    toString(): string;
    name(): "DEFAULT" | "STICKY";
}