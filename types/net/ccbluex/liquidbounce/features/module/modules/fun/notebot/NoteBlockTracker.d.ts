import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Chronometer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
export class NoteBlockTracker extends Object implements MinecraftShortcuts {
    constructor(pos: BlockPos)
    readonly currentNote: number | null;
    readonly pos: BlockPos;
    // private testTimeout: Chronometer;
    // private tuneTimeout: Chronometer;
    canTestRightNow(): boolean;
    canTuneRightNow(): boolean;
    click(): void;
    equals(other: Object | null): boolean;
    hashCode(): number;
    // private interact(): void;
    setObservedNote(note: number): void;
    testOnce(): void;
    tuneOnce(): void;
}