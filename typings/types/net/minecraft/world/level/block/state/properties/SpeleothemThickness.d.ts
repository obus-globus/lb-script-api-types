import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class SpeleothemThickness extends Enum<SpeleothemThickness> implements StringRepresentable {
    static BASE: SpeleothemThickness;
    static FRUSTUM: SpeleothemThickness;
    static MIDDLE: SpeleothemThickness;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static TIP: SpeleothemThickness;
    static TIP_MERGE: SpeleothemThickness;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SpeleothemThickness;
    static values(): SpeleothemThickness[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    toString(): string;
    name(): "TIP_MERGE" | "TIP" | "FRUSTUM" | "MIDDLE" | "BASE";
}