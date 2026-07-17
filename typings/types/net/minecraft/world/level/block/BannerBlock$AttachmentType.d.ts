import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class BannerBlock$AttachmentType extends Enum<BannerBlock$AttachmentType> implements StringRepresentable {
    static CODEC: Codec<BannerBlock$AttachmentType>;
    static GROUND: BannerBlock$AttachmentType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static WALL: BannerBlock$AttachmentType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BannerBlock$AttachmentType;
    static values(): BannerBlock$AttachmentType[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "WALL" | "GROUND";
}