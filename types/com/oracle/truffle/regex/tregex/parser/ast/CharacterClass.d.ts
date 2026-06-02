import type { RegexOptions } from '../../../../../../../com/oracle/truffle/regex/RegexOptions.d.ts'
import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { LookBehindAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookBehindAssertion.d.ts'
import type { QuantifiableTerm } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/QuantifiableTerm.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { Sequence } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Sequence.d.ts'
import type { AbstractStringBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/string/AbstractStringBuffer.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CharacterClass extends QuantifiableTerm {
    constructor(charSet: (Object | null)[])
    private constructor(copy: CharacterClass, charSet: (Object | null)[])
    readonly charSet: (Object | null)[];
    readonly lookBehindEntries: S[];
    addLookBehindEntry(ast: RegexAST, lookBehindEntry: LookBehindAssertion): void;
    copy(ast: RegexAST): CharacterClass;
    copyRecursive(ast: RegexAST, compilationBuffer: CompilationBuffer): CharacterClass;
    equalsSemantic(obj: RegexASTNode, ignoreQuantifier: boolean): boolean;
    extractSingleChar(literal: AbstractStringBuffer, mask: AbstractStringBuffer): void;
    getCharSet(): (Object | null)[];
    getLookBehindEntries(): LookBehindAssertion[];
    getParent(): Sequence;
    hasLookBehindEntries(): boolean;
    isUnrollingCandidate(options: RegexOptions): boolean;
    setCharSet(charSet: (Object | null)[]): void;
    setWasSingleChar(): void;
    setWasSingleChar(value: boolean): void;
    toJson(): JsonValue;
    toString(): string;
    wasSingleChar(): boolean;
}