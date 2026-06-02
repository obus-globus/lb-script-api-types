import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { LanguageInfo } from '../../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContextAwareExecutor } from '../../../../../../org/graalvm/tools/lsp/server/ContextAwareExecutor.d.ts'
import type { LanguageTriggerCharacters } from '../../../../../../org/graalvm/tools/lsp/server/LanguageTriggerCharacters.d.ts'
import type { AbstractRequestHandler } from '../../../../../../org/graalvm/tools/lsp/server/request/AbstractRequestHandler.d.ts'
import type { CompletionRequestHandler } from '../../../../../../org/graalvm/tools/lsp/server/request/CompletionRequestHandler.d.ts'
import type { SourceCodeEvaluator } from '../../../../../../org/graalvm/tools/lsp/server/request/SourceCodeEvaluator.d.ts'
import type { ParameterInformation } from '../../../../../../org/graalvm/tools/lsp/server/types/ParameterInformation.d.ts'
import type { SignatureHelp } from '../../../../../../org/graalvm/tools/lsp/server/types/SignatureHelp.d.ts'
import type { TextDocumentSurrogate } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogate.d.ts'
import type { TextDocumentSurrogateMap } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogateMap.d.ts'
export class SignatureHelpRequestHandler extends AbstractRequestHandler {
    constructor(envMain: TruffleInstrument$Env, env: TruffleInstrument$Env, surrogateMap: TextDocumentSurrogateMap, contextAwareExecutor: ContextAwareExecutor, sourceCodeEvaluator: SourceCodeEvaluator, completionHandler: CompletionRequestHandler, signatureTriggerCharacters: LanguageTriggerCharacters)
    // private completionHandler: CompletionRequestHandler;
    // private signatureTriggerCharacters: LanguageTriggerCharacters;
    // private sourceCodeEvaluator: SourceCodeEvaluator;
    // private getParameterInformation(param: Object, label: string, langInfo: LanguageInfo): ParameterInformation;
    // private isSignatureHelpTriggerCharOfLanguage(surrogate: TextDocumentSurrogate, line: number, charOffset: number): boolean;
    signatureHelpWithEnteredContext(uri: URI, line: number, originalCharacter: number): SignatureHelp;
}