import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DisplayContentsFactory } from '../../../../../../net/minecraft/world/item/crafting/display/DisplayContentsFactory.d.ts'
export interface DisplayContentsFactory$ForRemainders<T extends unknown> extends Object, DisplayContentsFactory<T>{
    addRemainder(entry: T, remainders: T[]): T;
}