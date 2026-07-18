import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Path extends Object {
    constructor(...arg0: string[])
    constructor(arg0: string, arg1: Path)
    constructor(arg0: Iterator<Path>)
    constructor(arg0: Path[])
    // private first: string;
    // private remainder: Path;
    // private appendToStringBuilder(arg0: StringBuilder): void;
    equals(arg0: Object | null): boolean;
    first(): string;
    hashCode(): number;
    last(): string;
    length(): number;
    parent(): Path;
    prepend(arg0: Path): Path;
    remainder(): Path;
    render(): string;
    startsWith(arg0: Path): boolean;
    subPath(arg0: number): Path;
    subPath(arg0: number, arg1: number): Path;
    toString(): string;
}