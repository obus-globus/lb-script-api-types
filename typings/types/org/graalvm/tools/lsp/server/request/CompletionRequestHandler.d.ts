import type { MaterializedFrame } from '../../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { LanguageInfo } from '../../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContextAwareExecutor } from '../../../../../../org/graalvm/tools/lsp/server/ContextAwareExecutor.d.ts'
import type { LanguageTriggerCharacters } from '../../../../../../org/graalvm/tools/lsp/server/LanguageTriggerCharacters.d.ts'
import type { AbstractRequestHandler } from '../../../../../../org/graalvm/tools/lsp/server/request/AbstractRequestHandler.d.ts'
import type { CompletionRequestHandler$CompletionKind } from '../../../../../../org/graalvm/tools/lsp/server/request/CompletionRequestHandler$CompletionKind.d.ts'
import type { SourceCodeEvaluator } from '../../../../../../org/graalvm/tools/lsp/server/request/SourceCodeEvaluator.d.ts'
import type { CompletionContext } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionContext.d.ts'
import type { CompletionItem } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionItem.d.ts'
import type { CompletionItemKind } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionItemKind.d.ts'
import type { CompletionList } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionList.d.ts'
import type { SourceWrapper } from '../../../../../../org/graalvm/tools/lsp/server/utils/SourceWrapper.d.ts'
import type { TextDocumentSurrogate } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogate.d.ts'
import type { TextDocumentSurrogateMap } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogateMap.d.ts'
export class CompletionRequestHandler extends AbstractRequestHandler {
    static getCompletionKind(paramsource: Source, paramoneBasedLineNumber: number, paramcolumn: number, paramcompletionTriggerCharacters: string[], paramcompletionContext: CompletionContext): CompletionRequestHandler$CompletionKind;
    constructor(envMain: TruffleInstrument$Env, env: TruffleInstrument$Env, surrogateMap: TextDocumentSurrogateMap, executor: ContextAwareExecutor, sourceCodeEvaluator: SourceCodeEvaluator, completionTriggerCharacters: LanguageTriggerCharacters)
    emptyList: CompletionList;
    // private languageCompletionTriggerCharacters: LanguageTriggerCharacters;
    // private sourceCodeEvaluator: SourceCodeEvaluator;
    completionWithEnteredContext(uri: URI, line: number, column: number, completionContext: CompletionContext): CompletionList;
    createCompletionDetail(obj: Object, langInfo: LanguageInfo): string;
    // private createCompletions(surrogate: TextDocumentSurrogate, line: number, column: number, completionKind: CompletionRequestHandler$CompletionKind): CompletionList;
    // private createDocumentation(value: Object, langInfo: LanguageInfo, scopeInformation: string): Object;
    documentationContent(docu: Object, langInfo: LanguageInfo): Object;
    fillCompletionsFromTruffleObject(completions: CompletionItem[], langInfo: LanguageInfo, object: Object): boolean;
    // private fillCompletionsWithGlobals(surrogate: TextDocumentSurrogate, completions: CompletionItem[]): void;
    // private fillCompletionsWithGlobalsAndLocals(line: number, surrogate: TextDocumentSurrogate, column: number, completions: CompletionItem[]): void;
    // private fillCompletionsWithLocals(surrogate: TextDocumentSurrogate, nearestNode: Node, completions: CompletionItem[], frame: MaterializedFrame): void;
    // private fillCompletionsWithObjectProperties(surrogate: TextDocumentSurrogate, line: number, column: number, completions: CompletionItem[]): void;
    // private fillCompletionsWithScopesValues(surrogate: TextDocumentSurrogate, completions: CompletionItem[], scopeOriginal: Object, completionItemKindDefault: CompletionItemKind, displayPriority: number): void;
    // private findNearestNode(sourceWrapper: SourceWrapper, line: number, column: number): Node;
    getDocumentation(value: Object, langInfo: LanguageInfo): Object;
    getFormattedSignature(truffleObj: Object, langInfo: LanguageInfo): string;
    // private getMetaObject(defaultInfo: LanguageInfo, object: Object): Object;
    // private getObjectLanguageInfo(defaultInfo: LanguageInfo, object: Object): LanguageInfo;
    // private languageToString(langInfo: LanguageInfo, value: Object): string;
}