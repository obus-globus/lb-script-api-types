import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class PlayerModelPart extends Enum<PlayerModelPart> implements StringRepresentable {
    static CAPE: PlayerModelPart;
    static CODEC: Codec<PlayerModelPart>;
    static HAT: PlayerModelPart;
    static JACKET: PlayerModelPart;
    static LEFT_PANTS_LEG: PlayerModelPart;
    static LEFT_SLEEVE: PlayerModelPart;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RIGHT_PANTS_LEG: PlayerModelPart;
    static RIGHT_SLEEVE: PlayerModelPart;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PlayerModelPart;
    static values(): PlayerModelPart[];
    private constructor(bit: number, name: string)
    readonly bit: number;
    readonly id: string;
    readonly mask: number;
    getBit(): number;
    getId(): string;
    getMask(): number;
    getName(): Component;
    getSerializedName(): string;
    name(): "CAPE" | "JACKET" | "LEFT_SLEEVE" | "RIGHT_SLEEVE" | "LEFT_PANTS_LEG" | "RIGHT_PANTS_LEG" | "HAT";
}