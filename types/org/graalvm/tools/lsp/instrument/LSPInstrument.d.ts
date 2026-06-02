import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { ExecutionEventNodeFactory } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNodeFactory.d.ts'
import type { TruffleInstrument } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { PrintWriter } from '../../../../../java/io/PrintWriter.d.ts'
import type { OptionDescriptor } from '../../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionKey } from '../../../../../org/graalvm/options/OptionKey.d.ts'
import type { OptionValues } from '../../../../../org/graalvm/options/OptionValues.d.ts'
import type { EnvironmentProvider } from '../../../../../org/graalvm/tools/lsp/instrument/EnvironmentProvider.d.ts'
import type { TruffleAdapter } from '../../../../../org/graalvm/tools/lsp/server/TruffleAdapter.d.ts'
export class LSPInstrument extends TruffleInstrument implements EnvironmentProvider {
    static DeveloperMode: OptionKey<boolean>;
    static ID: string;
    static Internal: OptionKey<boolean>;
    constructor()
    readonly environment: TruffleInstrument$Env;
    // private eventFactoryBinding: EventBinding<ExecutionEventNodeFactory>;
    // private options: OptionValues;
    // private waitForClose: boolean;
    getEnvironment(): TruffleInstrument$Env;
    getOptionDescriptors(): OptionDescriptor[];
    // private launchServer(info: PrintWriter, err: PrintWriter): TruffleAdapter;
    // private notifyClose(): void;
    onCreate(env: TruffleInstrument$Env): void;
    onDispose(env: TruffleInstrument$Env): void;
    onFinalize(env: TruffleInstrument$Env): void;
    // private setWaitForClose(): void;
    waitForClose(): void;
}