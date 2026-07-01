import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class MinecraftEventing_InteractionType extends Enum<MinecraftEventing_InteractionType> {
    static Breeding: MinecraftEventing_InteractionType;
    static Coloring: MinecraftEventing_InteractionType;
    static Commanding: MinecraftEventing_InteractionType;
    static Crafted: MinecraftEventing_InteractionType;
    static Curing: MinecraftEventing_InteractionType;
    static Equipping: MinecraftEventing_InteractionType;
    static Feeding: MinecraftEventing_InteractionType;
    static Igniting: MinecraftEventing_InteractionType;
    static Leashing: MinecraftEventing_InteractionType;
    static Milking: MinecraftEventing_InteractionType;
    static Naming: MinecraftEventing_InteractionType;
    static PetSleep: MinecraftEventing_InteractionType;
    static Shearing: MinecraftEventing_InteractionType;
    static Taming: MinecraftEventing_InteractionType;
    static Trading: MinecraftEventing_InteractionType;
    static Trusting: MinecraftEventing_InteractionType;
    static Unleashing: MinecraftEventing_InteractionType;
    static getByName(paramarg0: string): MinecraftEventing_InteractionType;
    static getByName(paramarg0: string, paramarg1: MinecraftEventing_InteractionType): MinecraftEventing_InteractionType;
    static getByValue(paramarg0: number): MinecraftEventing_InteractionType;
    static getByValue(paramarg0: number, paramarg1: MinecraftEventing_InteractionType): MinecraftEventing_InteractionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MinecraftEventing_InteractionType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: MinecraftEventing_InteractionType)
    readonly value: number;
    getValue(): number;
    name(): "Breeding" | "Taming" | "Curing" | "Crafted" | "Shearing" | "Milking" | "Trading" | "Feeding" | "Igniting" | "Coloring" | "Naming" | "Leashing" | "Unleashing" | "PetSleep" | "Trusting" | "Commanding" | "Equipping";
}