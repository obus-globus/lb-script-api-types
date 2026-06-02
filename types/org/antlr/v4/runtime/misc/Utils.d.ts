import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { IntegerList } from '../../../../../org/antlr/v4/runtime/misc/IntegerList.d.ts'
import type { IntervalSet } from '../../../../../org/antlr/v4/runtime/misc/IntervalSet.d.ts'
export class Utils extends Object {
    static count(paramarg0: string, paramarg1: string): number;
    static escapeWhitespace(paramarg0: string, paramarg1: boolean): string;
    static expandTabs(paramarg0: string, paramarg1: number): string;
    static join(paramarg0: Object | null, paramarg1: string): string;
    static join(paramarg0: Iterator<Object>, paramarg1: string): string;
    static newlines(paramarg0: number): string;
    static numNonnull(paramarg0: (Object | null)[]): number;
    static readFile(paramarg0: string): string[];
    static readFile(paramarg0: string, paramarg1: string): string[];
    static removeAllElements(paramarg0: E[], paramarg1: Object | null): void;
    static sequence(paramarg0: number, paramarg1: string): string;
    static spaces(paramarg0: number): string;
    static toCharArray(paramarg0: IntegerList): string[];
    static toMap(paramarg0: (Object | null)[]): { [key: string]: number };
    static toSet(paramarg0: BitSet): IntervalSet;
    static writeFile(paramarg0: string, paramarg1: string): void;
    static writeFile(paramarg0: string, paramarg1: string, paramarg2: string): void;
    constructor()
}