import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FoodProperties } from '../../../../net/minecraft/world/food/FoodProperties.d.ts'
export class FoodProperties$Builder extends Object {
    constructor()
    // private canAlwaysEat: boolean;
    // private nutrition: number;
    // private saturationModifier: number;
    alwaysEdible(): FoodProperties$Builder;
    build(): FoodProperties;
    nutrition(nutrition: number): FoodProperties$Builder;
    saturationModifier(saturationModifier: number): FoodProperties$Builder;
}