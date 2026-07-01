import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleFile } from '../../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { LanguageInfo } from '../../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextDocumentContentChangeEvent } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentContentChangeEvent.d.ts'
import type { CoverageData } from '../../../../../../org/graalvm/tools/lsp/server/utils/CoverageData.d.ts'
import type { SourceSectionReference } from '../../../../../../org/graalvm/tools/lsp/server/utils/SourceSectionReference.d.ts'
import type { SourceWrapper } from '../../../../../../org/graalvm/tools/lsp/server/utils/SourceWrapper.d.ts'
export class TextDocumentSurrogate extends Object {
    constructor(truffleFile: TruffleFile, languageInfo: LanguageInfo)
    readonly changeEventsSinceLastSuccessfulParsing: TextDocumentContentChangeEvent[];
    readonly coverageAnalysisDone: boolean;
    readonly editorText: string;
    readonly languageInfo: LanguageInfo;
    readonly lastChange: TextDocumentContentChangeEvent;
    // private section2coverageData: Map<SourceSectionReference, CoverageData[]>;
    readonly sourceWrapper: SourceWrapper;
    // private truffleFile: TruffleFile;
    addLocationCoverage(section: SourceSectionReference, coverageData: CoverageData): void;
    buildSource(): Source;
    clearCoverage(): void;
    clearCoverage(runScriptUri: URI): void;
    copy(): TextDocumentSurrogate;
    equals(obj: Object | null): boolean;
    getChangeEventsSinceLastSuccessfulParsing(): TextDocumentContentChangeEvent[];
    getCoverageData(section: SourceSection): CoverageData[];
    getCoverageData(section: SourceSectionReference): CoverageData[];
    getCoverageLocations(): SourceSectionReference[];
    getCoverageUris(section: SourceSection): URI[];
    getEditorText(): string;
    getLanguageId(): string;
    getLanguageInfo(): LanguageInfo;
    getLastChange(): TextDocumentContentChangeEvent;
    getSource(): Source;
    getSourceWrapper(): SourceWrapper;
    getTypeHarvestingDone(): boolean;
    getUri(): URI;
    hasCoverageData(): boolean;
    hashCode(): number;
    isLocationCovered(section: SourceSectionReference): boolean;
    isSourceCodeReadyForCodeCompletion(): boolean;
    notifyParsingDone(callTarget: CallTarget): void;
    prepareParsing(): SourceWrapper;
    replace(oldSection: SourceSectionReference, newSection: SourceSectionReference): void;
    setCoverageAnalysisDone(coverageAnalysisDone: boolean): void;
    setEditorText(editorText: string): void;
    setLastChange(lastChange: TextDocumentContentChangeEvent): void;
}