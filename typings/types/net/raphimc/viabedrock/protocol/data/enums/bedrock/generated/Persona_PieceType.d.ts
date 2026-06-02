import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class Persona_PieceType extends Enum<Persona_PieceType> {
    static Arms: Persona_PieceType;
    static Back: Persona_PieceType;
    static Body: Persona_PieceType;
    static Bottom: Persona_PieceType;
    static Capes: Persona_PieceType;
    static ClassicSkin: Persona_PieceType;
    static Dress: Persona_PieceType;
    static Emote: Persona_PieceType;
    static Eyes: Persona_PieceType;
    static FaceAccessory: Persona_PieceType;
    static FacialHair: Persona_PieceType;
    static Feet: Persona_PieceType;
    static Hair: Persona_PieceType;
    static Hands: Persona_PieceType;
    static Head: Persona_PieceType;
    static High_Pants: Persona_PieceType;
    static Hood: Persona_PieceType;
    static LeftArm: Persona_PieceType;
    static LeftLeg: Persona_PieceType;
    static Legs: Persona_PieceType;
    static Mouth: Persona_PieceType;
    static Outerwear: Persona_PieceType;
    static RightArm: Persona_PieceType;
    static RightLeg: Persona_PieceType;
    static Skeleton: Persona_PieceType;
    static Skin: Persona_PieceType;
    static Top: Persona_PieceType;
    static getByName(paramarg0: string): Persona_PieceType;
    static getByName(paramarg0: string, paramarg1: Persona_PieceType): Persona_PieceType;
    static getByValue(paramarg0: number): Persona_PieceType;
    static getByValue(paramarg0: number, paramarg1: Persona_PieceType): Persona_PieceType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Persona_PieceType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: Persona_PieceType)
    readonly value: number;
    getValue(): number;
    name(): "Skeleton" | "Body" | "Skin" | "Bottom" | "Feet" | "Dress" | "Top" | "High_Pants" | "Hands" | "Outerwear" | "FacialHair" | "Mouth" | "Eyes" | "Hair" | "Hood" | "Back" | "FaceAccessory" | "Head" | "Legs" | "LeftLeg" | "RightLeg" | "Arms" | "LeftArm" | "RightArm" | "Capes" | "ClassicSkin" | "Emote";
}