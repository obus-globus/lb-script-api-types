import type { TruffleLogger } from '../../../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { LanguageInfo } from '../../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OptionValues } from '../../../../../../org/graalvm/options/OptionValues.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
import type { TextDocumentContentChangeEvent } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentContentChangeEvent.d.ts'
import type { SourceUtils$SourceFix } from '../../../../../../org/graalvm/tools/lsp/server/utils/SourceUtils$SourceFix.d.ts'
import type { TextDocumentSurrogate } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogate.d.ts'
export class SourceUtils extends Object {
    static applyTextDocumentChanges(paramlist: TextDocumentContentChangeEvent[], paramsource: Source, paramsurrogate: TextDocumentSurrogate, paramlogger: TruffleLogger): string;
    static convertLineAndColumnToOffset(paramsource: Source, paramoneBasedLineNumber: number, paramcolumn: number): number;
    static findSourceLocation(paramenv: TruffleInstrument$Env, paramobject: Object, paramdefaultLanguageInfo: LanguageInfo): SourceSection;
    static getOrFixFileUri(paramsource: Source): URI;
    static getRangeFrom(paramte: Exception, paraminteropLib: InteropLibrary): Range;
    static isColumnValid(paramline: number, paramcolumn: number, paramsource: Source): boolean;
    static isLineValid(paramzeroBasedLine: number, paramsource: Source): boolean;
    static isValidSourceSection(paramsourceSection: SourceSection, paramoptions: OptionValues): boolean;
    static removeLastTextInsertion(paramsurrogate: TextDocumentSurrogate, paramoriginalCharacter: number, paramlogger: TruffleLogger): SourceUtils$SourceFix;
    static sourceSectionToRange(paramsection: SourceSection): Range;
    static zeroBasedColumnToOneBasedColumn(paramzeroBasedLine: number, paramoneBasedLine: number, paramzeroBasedColumn: number, paramsource: Source): number;
    static zeroBasedLineToOneBasedLine(paramline: number, paramsource: Source): number;
    private constructor()
}