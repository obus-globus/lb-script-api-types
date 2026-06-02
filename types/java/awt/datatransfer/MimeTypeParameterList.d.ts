import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export class MimeTypeParameterList extends Object implements Cloneable {
    constructor()
    constructor(arg0: string)
    // private parameters: { [key: string]: string };
    clone(): Object;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    get(arg0: string): string;
    getNames(): Enumeration<string>;
    hashCode(): number;
    isEmpty(): boolean;
    parse(arg0: string): void;
    remove(arg0: string): void;
    set(arg0: string, arg1: string): void;
    size(): number;
    toString(): string;
}