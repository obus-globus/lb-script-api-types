import type { File } from '../../../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export abstract class ModuleDebugRecorder$DebugRecorderMode<T extends Object | number | string | boolean> extends Mode {
    static Companion: Tagged$Companion;
    constructor(name: string)
    readonly folder: File;
    // private packets: T[];
    /*not mapped: */ getPackets$liquidbounce(): T[];
    readonly parent: ModeValueGroup<Object>;
    disable(): void;
    enable(): void;
    protected recordPacket(packet: T): void;
}