import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Pattern } from '../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
import type { MatchResult } from '../../kotlin/text/MatchResult.d.ts'
import type { Regex$Companion } from '../../kotlin/text/Regex$Companion.d.ts'
import type { RegexOption } from '../../kotlin/text/RegexOption.d.ts'
export class Regex extends Object implements Serializable {
    static Companion: Regex$Companion;
    constructor(nativePattern: Pattern)
    constructor(pattern: string)
    constructor(pattern: string, options: RegexOption[])
    constructor(pattern: string, option: RegexOption)
    // private _options: RegexOption[] | null;
    // private nativePattern: Pattern;
    readonly options: RegexOption[];
    readonly pattern: string;
    containsMatchIn(input: CharSequence): boolean;
    find(input: CharSequence, startIndex: number): MatchResult | null;
    findAll(input: CharSequence, startIndex: number): Sequence<MatchResult>;
    matchAt(input: CharSequence, index: number): MatchResult | null;
    matchEntire(input: CharSequence): MatchResult | null;
    matches(input: CharSequence): boolean;
    matchesAt(input: CharSequence, index: number): boolean;
    // private readObject(input: ObjectInputStream): void;
    replace(input: CharSequence, transform: Function1<MatchResult, CharSequence>): string;
    replace(input: CharSequence, replacement: string): string;
    replaceFirst(input: CharSequence, replacement: string): string;
    split(input: CharSequence, limit: number): string[];
    splitToSequence(input: CharSequence, limit: number): Sequence<string>;
    toPattern(): Pattern;
    toString(): string;
    // private writeReplace(): Object;
}