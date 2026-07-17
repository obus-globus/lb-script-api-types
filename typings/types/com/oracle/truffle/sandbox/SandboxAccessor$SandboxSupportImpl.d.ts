import type { Accessor$SandboxSupport } from '../../../../com/oracle/truffle/api/impl/Accessor$SandboxSupport.d.ts'
import type { OptionKey } from '../../../../org/graalvm/options/OptionKey.d.ts'
export class SandboxAccessor$SandboxSupportImpl extends Accessor$SandboxSupport {
    constructor()
    getMaxASTDepthOption(): OptionKey<number>;
    isInterpreterCallStackHeadRoomSupported(): boolean;
}