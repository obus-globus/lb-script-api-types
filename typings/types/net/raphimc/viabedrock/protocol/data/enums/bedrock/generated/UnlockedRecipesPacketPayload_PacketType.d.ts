import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class UnlockedRecipesPacketPayload_PacketType extends Enum<UnlockedRecipesPacketPayload_PacketType> {
    static Empty: UnlockedRecipesPacketPayload_PacketType;
    static InitiallyUnlockedRecipes: UnlockedRecipesPacketPayload_PacketType;
    static NewlyUnlockedRecipes: UnlockedRecipesPacketPayload_PacketType;
    static RemoveAllUnlockedRecipes: UnlockedRecipesPacketPayload_PacketType;
    static RemoveUnlockedRecipes: UnlockedRecipesPacketPayload_PacketType;
    static getByName(paramarg0: string): UnlockedRecipesPacketPayload_PacketType;
    static getByName(paramarg0: string, paramarg1: UnlockedRecipesPacketPayload_PacketType): UnlockedRecipesPacketPayload_PacketType;
    static getByValue(paramarg0: number): UnlockedRecipesPacketPayload_PacketType;
    static getByValue(paramarg0: number, paramarg1: UnlockedRecipesPacketPayload_PacketType): UnlockedRecipesPacketPayload_PacketType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): UnlockedRecipesPacketPayload_PacketType;
    static values(): UnlockedRecipesPacketPayload_PacketType[];
    private constructor(arg2: number)
    private constructor(arg2: UnlockedRecipesPacketPayload_PacketType)
    readonly value: number;
    getValue(): number;
    name(): "Empty" | "InitiallyUnlockedRecipes" | "NewlyUnlockedRecipes" | "RemoveUnlockedRecipes" | "RemoveAllUnlockedRecipes";
}