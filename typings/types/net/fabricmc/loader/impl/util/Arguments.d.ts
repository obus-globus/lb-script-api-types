import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Arguments extends Object {
    static ADD_MODS: string;
    static GAME_VERSION: string;
    constructor()
    readonly extraArgs: string[];
    // private values: JavaMap<string, string>;
    addExtraArg(arg0: string): void;
    containsKey(arg0: string): boolean;
    get(arg0: string): string;
    getExtraArgs(): string[];
    getOrDefault(arg0: string, arg1: string): string;
    keys(): string[];
    parse(arg0: string[]): void;
    put(arg0: string, arg1: string): void;
    remove(arg0: string): string;
    toArray(): string[];
}