import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { IntFunction } from '../../../../java/util/function/IntFunction.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class ItemDisplayContext extends Enum<ItemDisplayContext> implements StringRepresentable {
    static BY_ID: (param0: number) => ItemDisplayContext;
    static CODEC: Codec<ItemDisplayContext>;
    static FIRST_PERSON_LEFT_HAND: ItemDisplayContext;
    static FIRST_PERSON_RIGHT_HAND: ItemDisplayContext;
    static FIXED: ItemDisplayContext;
    static GROUND: ItemDisplayContext;
    static GUI: ItemDisplayContext;
    static HEAD: ItemDisplayContext;
    static NONE: ItemDisplayContext;
    static ON_SHELF: ItemDisplayContext;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static THIRD_PERSON_LEFT_HAND: ItemDisplayContext;
    static THIRD_PERSON_RIGHT_HAND: ItemDisplayContext;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ItemDisplayContext;
    static values(): ItemDisplayContext[];
    private constructor(id: number, name: string)
    readonly id: number;
    // private name: string;
    firstPerson(): boolean;
    getId(): number;
    getSerializedName(): string;
    leftHand(): boolean;
    name(): "NONE" | "THIRD_PERSON_LEFT_HAND" | "THIRD_PERSON_RIGHT_HAND" | "FIRST_PERSON_LEFT_HAND" | "FIRST_PERSON_RIGHT_HAND" | "HEAD" | "GUI" | "GROUND" | "FIXED" | "ON_SHELF";
}