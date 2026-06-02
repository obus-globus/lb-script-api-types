import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Matcher } from '../../../java/util/regex/Matcher.d.ts'
import type { Pattern$BitClass } from '../../../java/util/regex/Pattern$BitClass.d.ts'
import type { Pattern$CharPredicate } from '../../../java/util/regex/Pattern$CharPredicate.d.ts'
import type { Pattern$CharProperty } from '../../../java/util/regex/Pattern$CharProperty.d.ts'
import type { Pattern$GroupHead } from '../../../java/util/regex/Pattern$GroupHead.d.ts'
import type { Pattern$Node } from '../../../java/util/regex/Pattern$Node.d.ts'
import type { Pattern$Qtype } from '../../../java/util/regex/Pattern$Qtype.d.ts'
import type { PatternSyntaxException } from '../../../java/util/regex/PatternSyntaxException.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class Pattern extends Object implements Serializable {
    static CANON_EQ: number;
    static CASE_INSENSITIVE: number;
    static COMMENTS: number;
    static DOTALL: number;
    static LITERAL: number;
    static MULTILINE: number;
    static UNICODE_CASE: number;
    static UNICODE_CHARACTER_CLASS: number;
    static UNIX_LINES: number;
    static compile(paramarg0: string): Pattern;
    static compile(paramarg0: string, paramarg1: number): Pattern;
    static matches(paramarg0: string, paramarg1: CharSequence): boolean;
    static quote(paramarg0: string): string;
    private constructor(arg0: string, arg1: number)
    // private buffer: number[];
    // private capturingGroupCount: number;
    // private compiled: boolean;
    // private cursor: number;
    // private flags: number;
    // private flags0: number;
    // private groupNodes: Pattern$GroupHead[];
    // private hasGroupRef: boolean;
    // private hasSupplementary: boolean;
    // private localCount: number;
    // private localTCNCount: number;
    // private matchRoot: Pattern$Node;
    // private namedGroups: { [key: string]: number };
    // private normalizedPattern: string;
    // private pattern: string;
    // private patternLength: number;
    // private predicate: (param0: number) => kotlin.Boolean;
    // private root: Pattern$Node;
    // private temp: number[];
    // private topClosureNodes: Pattern$Node[];
    // private N(): number;
    // private RemoveQEQuoting(): void;
    // private accept(arg0: number, arg1: string): void;
    // private addFlag(): void;
    // private append(arg0: number, arg1: number): void;
    asMatchPredicate(): (param0: string) => kotlin.Boolean;
    asPredicate(): (param0: string) => kotlin.Boolean;
    // private atom(): Pattern$Node;
    // private bitsOrSingle(arg0: Pattern$BitClass, arg1: number): (param0: number) => kotlin.Boolean;
    // private c(): number;
    // private clazz(arg0: boolean): (param0: number) => kotlin.Boolean;
    // private closure(arg0: Pattern$Node): Pattern$Node;
    // private compile(): void;
    // private createGroup(arg0: boolean): Pattern$Node;
    // private curly(arg0: Pattern$Node, arg1: number): Pattern$Node;
    // private cursor(): number;
    // private error(arg0: string): PatternSyntaxException;
    // private escape(arg0: boolean, arg1: boolean, arg2: boolean): number;
    // private expr(arg0: Pattern$Node): Pattern$Node;
    // private family(arg0: boolean, arg1: boolean): (param0: number) => kotlin.Boolean;
    // private findSupplementary(arg0: number, arg1: number): boolean;
    flags(): number;
    // private group0(): Pattern$Node;
    // private groupname(arg0: number): string;
    // private has(arg0: number): boolean;
    // private isLineSeparator(arg0: number): boolean;
    // private mark(arg0: number): void;
    matcher(arg0: CharSequence): Matcher;
    namedGroups(): { [key: string]: number };
    // private namedGroupsMap(): { [key: string]: number };
    // private newCharProperty(arg0: (param0: number) => kotlin.Boolean): Pattern$CharProperty;
    // private newSlice(arg0: number[], arg1: number, arg2: boolean): Pattern$Node;
    // private next(): number;
    // private nextEscaped(): number;
    // private o(): number;
    // private parsePastLine(): number;
    // private parsePastWhitespace(arg0: number): number;
    pattern(): string;
    // private peek(): number;
    // private peekPastLine(): number;
    // private peekPastWhitespace(arg0: number): number;
    // private qtype(): Pattern$Qtype;
    // private range(arg0: Pattern$BitClass): (param0: number) => kotlin.Boolean;
    // private read(): number;
    // private readEscaped(): number;
    // private readObject(arg0: ObjectInputStream): void;
    // private ref(arg0: number): Pattern$Node;
    // private sequence(arg0: Pattern$Node): Pattern$Node;
    // private setcursor(arg0: number): void;
    // private single(arg0: number): (param0: number) => kotlin.Boolean;
    // private skip(): number;
    split(arg0: CharSequence): string[];
    split(arg0: CharSequence, arg1: number): string[];
    // private split(arg0: CharSequence, arg1: number, arg2: boolean): string[];
    splitAsStream(arg0: CharSequence): Stream<string>;
    splitWithDelimiters(arg0: CharSequence, arg1: number): string[];
    // private subFlag(): void;
    toString(): string;
    // private u(): number;
    // private unread(): void;
    // private uxxxx(): number;
    // private x(): number;
}