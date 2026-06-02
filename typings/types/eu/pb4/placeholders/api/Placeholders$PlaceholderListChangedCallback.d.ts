import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export interface Placeholders$PlaceholderListChangedCallback extends Object{
    onPlaceholderListChange(arg0: Identifier, arg1: boolean): void;
}