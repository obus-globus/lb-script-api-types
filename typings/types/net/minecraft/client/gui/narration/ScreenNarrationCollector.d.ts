import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { ScreenNarrationCollector$EntryKey } from '../../../../../net/minecraft/client/gui/narration/ScreenNarrationCollector$EntryKey.d.ts'
import type { ScreenNarrationCollector$NarrationEntry } from '../../../../../net/minecraft/client/gui/narration/ScreenNarrationCollector$NarrationEntry.d.ts'
export class ScreenNarrationCollector extends Object {
    constructor()
    // private entries: JavaMap<ScreenNarrationCollector$EntryKey, ScreenNarrationCollector$NarrationEntry>;
    // private generation: number;
    collectNarrationText(force: boolean): string;
    update(updater: (param0: NarrationElementOutput) => void): void;
}