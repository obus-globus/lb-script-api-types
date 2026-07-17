import type { Accessor$Support } from '../../../../../com/oracle/truffle/api/impl/Accessor$Support.d.ts'
import type { OptionKey } from '../../../../../org/graalvm/options/OptionKey.d.ts'
export abstract class Accessor$SandboxSupport extends Accessor$Support {
    constructor()
    getMaxASTDepthOption(): OptionKey<number>;
    isInterpreterCallStackHeadRoomSupported(): boolean;
}