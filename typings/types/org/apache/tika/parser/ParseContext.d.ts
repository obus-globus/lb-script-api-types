import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ParseContext extends Object implements Serializable {
    constructor()
    // private context: JavaMap<string, Object>;
    equals(arg0: Object | null): boolean;
    get<T extends unknown>(arg0: Class<T>): T;
    get<T extends unknown>(arg0: Class<T>, arg1: T): T;
    hashCode(): number;
    isEmpty(): boolean;
    keySet(): string[];
    set<T extends unknown>(arg0: Class<T>, arg1: T): void;
}