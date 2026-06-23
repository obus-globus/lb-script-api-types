import type { Object } from '../../java/lang/Object.d.ts'
export interface OptionNameMap<V extends unknown> extends Object{
    contains(arg0: string): boolean;
    get(arg0: string): V;
    put(arg0: string, arg1: V): void;
    putAll(arg0: string[], arg1: V): void;
    remove(arg0: string): void;
    toJavaUtilMap(): { [key: string]: V };
}