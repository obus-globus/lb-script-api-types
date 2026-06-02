import type { OptionNameMap } from '../../joptsimple/internal/OptionNameMap.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class AbbreviationMap<V extends Object | number | string | boolean> extends Object implements OptionNameMap<V> {
    constructor()
    // private children: { [key: string]: AbbreviationMap<V> };
    // private key: string;
    // private keysBeyond: number;
    // private value: V;
    // private add(arg0: string[], arg1: V, arg2: number, arg3: number): boolean;
    // private addToMappings(arg0: { [key: string]: V }): void;
    contains(arg0: string): boolean;
    get(arg0: string): V;
    put(arg0: string, arg1: V): void;
    putAll(arg0: string[], arg1: V): void;
    // private remove(arg0: string[], arg1: number, arg2: number): boolean;
    remove(arg0: string): void;
    // private removeAtEndOfKey(): boolean;
    // private setValueToThatOfOnlyChild(): void;
    toJavaUtilMap(): { [key: string]: V };
}