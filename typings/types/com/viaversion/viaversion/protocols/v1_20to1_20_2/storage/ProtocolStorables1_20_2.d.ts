import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { ConfigurationState } from '../../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/storage/ConfigurationState.d.ts'
import type { LastResourcePack } from '../../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/storage/LastResourcePack.d.ts'
import type { LastTags } from '../../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/storage/LastTags.d.ts'
export class ProtocolStorables1_20_2 extends ProtocolStorablesBase {
    constructor()
    // private configurationState: ConfigurationState;
    configurationState(): ConfigurationState;
    lastResourcePack(): LastResourcePack;
    lastTags(): LastTags;
    setLastResourcePack(arg0: LastResourcePack): void;
    setLastTags(arg0: LastTags): void;
}