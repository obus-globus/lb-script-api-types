import type { OptionNameMap } from '../../joptsimple/internal/OptionNameMap.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SimpleOptionNameMap<V extends unknown> extends Object implements OptionNameMap<V> {
    constructor()
    // private map: { [key: string]: V };
    contains(arg0: string): boolean;
    get(arg0: string): V;
    put(arg0: string, arg1: V): void;
    putAll(arg0: string[], arg1: V): void;
    remove(arg0: string): void;
    toJavaUtilMap(): { [key: string]: V };
}