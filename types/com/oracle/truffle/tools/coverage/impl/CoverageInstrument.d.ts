import type { TruffleInstrument } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { CoverageTracker } from '../../../../../../com/oracle/truffle/tools/coverage/CoverageTracker.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { OptionDescriptor } from '../../../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { Engine } from '../../../../../../org/graalvm/polyglot/Engine.d.ts'
export class CoverageInstrument extends TruffleInstrument {
    static ID: string;
    static getTracker(paramengine: Engine): CoverageTracker;
    static setFactory(paramfactory: (param0: TruffleInstrument$Env) => CoverageTracker): void;
    constructor()
    // private absoluteOutputPath: string;
    // private enabled: boolean;
    // private tracker: CoverageTracker;
    getOptionDescriptors(): OptionDescriptor[];
    onCreate(env: TruffleInstrument$Env): void;
    onDispose(env: TruffleInstrument$Env): void;
    onFinalize(env: TruffleInstrument$Env): void;
}