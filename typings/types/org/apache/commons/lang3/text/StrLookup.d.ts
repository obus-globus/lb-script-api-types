import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StrLookup<V extends unknown> extends Object {
    static mapLookup(paramarg0: { [key: string]: Object | null }): StrLookup<Object>;
    static noneLookup(): StrLookup<Object>;
    static systemPropertiesLookup(): StrLookup<string>;
    constructor()
    lookup(arg0: string): string;
}