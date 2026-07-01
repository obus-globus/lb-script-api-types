import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export interface Name extends Serializable, Object, Cloneable, Comparable<Object>{
    add(arg0: number, arg1: string): Name;
    add(arg0: string): Name;
    addAll(arg0: Name): Name;
    addAll(arg0: number, arg1: Name): Name;
    clone(): Object;
    compareTo(arg0: Object): number;
    endsWith(arg0: Name): boolean;
    get(arg0: number): string;
    getAll(): Enumeration<string>;
    getPrefix(arg0: number): Name;
    getSuffix(arg0: number): Name;
    isEmpty(): boolean;
    remove(arg0: number): Object;
    size(): number;
    startsWith(arg0: Name): boolean;
}