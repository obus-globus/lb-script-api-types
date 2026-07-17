import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class BedPart extends Enum<BedPart> implements StringRepresentable {
    static CODEC: Codec<BedPart>;
    static FOOT: BedPart;
    static HEAD: BedPart;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BedPart;
    static values(): BedPart[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    toString(): string;
    name(): "HEAD" | "FOOT";
}