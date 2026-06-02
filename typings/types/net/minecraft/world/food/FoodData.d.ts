import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { FoodProperties } from '../../../../net/minecraft/world/food/FoodProperties.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class FoodData extends Object {
    constructor()
    // private exhaustionLevel: number;
    readonly foodLevel: number;
    readonly saturationLevel: number;
    // private tickTimer: number;
    // private add(food: number, saturation: number): void;
    addAdditionalSaveData(output: ValueOutput): void;
    addExhaustion(amount: number): void;
    eat(food: number, saturationModifier: number): void;
    eat(foodProperties: FoodProperties): void;
    getFoodLevel(): number;
    getSaturationLevel(): number;
    hasEnoughFood(): boolean;
    needsFood(): boolean;
    readAdditionalSaveData(input: ValueInput): void;
    setFoodLevel(food: number): void;
    setSaturation(saturation: number): void;
    tick(player: ServerPlayer): void;
}