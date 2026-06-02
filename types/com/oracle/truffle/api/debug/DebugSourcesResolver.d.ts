import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebugSourcesResolver extends Object {
    constructor(env: TruffleInstrument$Env)
    // private env: TruffleInstrument$Env;
    // private resolvedMap: Map<Source, Source>;
    // private sourcePath: URI[];
    // private doResolve(source: Source): Source;
    // private findAnyTruffleContext(): TruffleContext;
    resolve(source: Source): Source;
    resolve(section: SourceSection): SourceSection;
    setSourcePath(uris: URI[]): void;
}