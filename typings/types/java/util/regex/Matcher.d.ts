import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Appendable } from '../../../java/lang/Appendable.d.ts'
import type { StringBuffer } from '../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { IntHashSet } from '../../../java/util/regex/IntHashSet.d.ts'
import type { MatchResult } from '../../../java/util/regex/MatchResult.d.ts'
import type { Pattern } from '../../../java/util/regex/Pattern.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class Matcher extends Object implements MatchResult {
    static quoteReplacement(paramarg0: string): string;
    constructor()
    constructor(arg0: Pattern, arg1: CharSequence)
    // private acceptMode: number;
    // private anchoringBounds: boolean;
    // private first: number;
    // private from: number;
    // private groups: number[];
    // private hitEnd: boolean;
    // private last: number;
    // private lastAppendPosition: number;
    // private locals: number[];
    // private localsPos: IntHashSet[];
    // private lookbehindTo: number;
    // private modCount: number;
    // private namedGroups: JavaMap<string, number>;
    // private oldLast: number;
    // private parentPattern: Pattern;
    // private requireEnd: boolean;
    // private text: CharSequence;
    // private to: number;
    // private transparentBounds: boolean;
    // private appendExpandedReplacement(arg0: Appendable, arg1: string): void;
    appendReplacement(arg0: StringBuffer, arg1: string): Matcher;
    appendReplacement(arg0: StringBuilder, arg1: string): Matcher;
    appendTail(arg0: StringBuffer): StringBuffer;
    appendTail(arg0: StringBuilder): StringBuilder;
    charAt(arg0: number): string;
    // private checkGroup(arg0: number): void;
    // private checkMatch(): void;
    end(arg0: string): number;
    end(): number;
    end(arg0: number): number;
    find(): boolean;
    find(arg0: number): boolean;
    getMatchedGroupIndex(arg0: string): number;
    getSubSequence(arg0: number, arg1: number): CharSequence;
    getTextLength(): number;
    group(arg0: string): string;
    group(): string;
    group(arg0: number): string;
    groupCount(): number;
    // private groupNumber(arg0: string): number;
    hasAnchoringBounds(): boolean;
    hasMatch(): boolean;
    hasTransparentBounds(): boolean;
    hitEnd(): boolean;
    lookingAt(): boolean;
    match(arg0: number, arg1: number): boolean;
    matches(): boolean;
    // private maxEnd(): number;
    // private minStart(): number;
    namedGroups(): JavaMap<string, number>;
    pattern(): Pattern;
    region(arg0: number, arg1: number): Matcher;
    regionEnd(): number;
    regionStart(): number;
    replaceAll(arg0: (param0: MatchResult) => string): string;
    replaceAll(arg0: string): string;
    replaceFirst(arg0: (param0: MatchResult) => string): string;
    replaceFirst(arg0: string): string;
    requireEnd(): boolean;
    reset(): Matcher;
    reset(arg0: CharSequence): Matcher;
    results(): Stream<MatchResult>;
    search(arg0: number): boolean;
    start(arg0: string): number;
    start(): number;
    start(arg0: number): number;
    toMatchResult(): MatchResult;
    toString(): string;
    useAnchoringBounds(arg0: boolean): Matcher;
    usePattern(arg0: Pattern): Matcher;
    useTransparentBounds(arg0: boolean): Matcher;
}