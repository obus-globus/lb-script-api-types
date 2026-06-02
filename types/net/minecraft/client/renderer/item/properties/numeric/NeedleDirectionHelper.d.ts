import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { NeedleDirectionHelper$Wobbler } from '../../../../../../../net/minecraft/client/renderer/item/properties/numeric/NeedleDirectionHelper$Wobbler.d.ts'
import type { ItemOwner } from '../../../../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export abstract class NeedleDirectionHelper extends Object {
    static nonWobbler(): NeedleDirectionHelper$Wobbler;
    static standardWobbler(paramfactor: number): NeedleDirectionHelper$Wobbler;
    constructor(wobble: boolean)
    // private wobble: boolean;
    calculate(itemStack: ItemStack, level: ClientLevel, seed: number, owner: ItemOwner): number;
    get(itemStack: ItemStack, clientLevel: ClientLevel, owner: ItemOwner, seed: number): number;
    newWobbler(factor: number): NeedleDirectionHelper$Wobbler;
    wobble(): boolean;
}