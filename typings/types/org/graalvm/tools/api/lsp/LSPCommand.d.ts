import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LSPServerAccessor } from '../../../../../org/graalvm/tools/api/lsp/LSPServerAccessor.d.ts'
export interface LSPCommand extends Object{
    execute(server: LSPServerAccessor, env: TruffleInstrument$Env, arguments: Object[]): Object;
    getName(): string;
    getTimeoutMillis(): number;
    onTimeout(arguments: Object[]): Object;
}