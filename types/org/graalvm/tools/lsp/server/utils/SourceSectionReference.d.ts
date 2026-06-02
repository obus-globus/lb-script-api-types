import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
export class SourceSectionReference extends Object {
    static from(paramsection: SourceSection): SourceSectionReference;
    private constructor()
    constructor(section: SourceSectionReference)
    readonly endColumn: number;
    readonly endLine: number;
    readonly startColumn: number;
    readonly startLine: number;
    before(range: Range): boolean;
    behind(range: Range): boolean;
    equals(obj: Object | null): boolean;
    getEndColumn(): number;
    getEndLine(): number;
    getStartColumn(): number;
    getStartLine(): number;
    hashCode(): number;
    includes(range: Range): boolean;
    setEndColumn(endColumn: number): void;
    setEndLine(endLine: number): void;
    setStartColumn(startColumn: number): void;
    setStartLine(startLine: number): void;
    toString(): string;
}