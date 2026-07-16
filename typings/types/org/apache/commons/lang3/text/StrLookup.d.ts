import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StrLookup<V extends unknown> extends Object {
    static mapLookup<V extends unknown>(paramarg0: { [key: string]: V }): StrLookup<V>;
    static noneLookup(): StrLookup<Object>;
    static systemPropertiesLookup(): StrLookup<string>;
    constructor()
    lookup(arg0: string): string;
}