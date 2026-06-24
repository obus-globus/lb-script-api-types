import type { UnitAliases$Alias } from '../../../../../com/ibm/icu/impl/units/UnitAliases$Alias.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnitAliases extends Object {
    constructor()
    // private mapAliasToReplacement: { [key: string]: string };
    getAliases(): UnitAliases$Alias[];
    getReplacement(arg0: string): string;
}