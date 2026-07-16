import type { TruffleLogger } from '../../../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NearestNode } from '../../../../../../org/graalvm/tools/lsp/server/utils/NearestNode.d.ts'
import type { NearestSectionsFinder$NearestSections } from '../../../../../../org/graalvm/tools/lsp/server/utils/NearestSectionsFinder$NearestSections.d.ts'
export class NearestSectionsFinder extends Object {
    static findExprNodeBeforePos(paramsource: Source, paramline: number, paramcolumn: number, paramenv: TruffleInstrument$Env): NearestNode;
    static findNearestNode(paramsource: Source, paramline: number, paramcharacter: number, paramenv: TruffleInstrument$Env, paramlogger: TruffleLogger): NearestNode;
    static findNearestSections(paramsource: Source, paramenv: TruffleInstrument$Env, paramoneBasedLineNumber: number, paramcolumn: number, paraminstrumentableNodesOnly: boolean, ...paramtags: Class<Object>[]): NearestSectionsFinder$NearestSections;
    private constructor()
}