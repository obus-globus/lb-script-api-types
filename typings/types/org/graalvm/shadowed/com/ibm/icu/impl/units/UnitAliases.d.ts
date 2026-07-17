import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { UnitAliases$Alias } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/UnitAliases$Alias.d.ts'
export class UnitAliases extends Object {
    constructor()
    // private mapAliasToReplacement: { [key: string]: string };
    getAliases(): UnitAliases$Alias[];
    getReplacement(alias: string): string;
}