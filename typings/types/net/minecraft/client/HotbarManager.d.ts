import type { DataFixer } from '../../../com/mojang/datafixers/DataFixer.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Hotbar } from '../../../net/minecraft/client/player/inventory/Hotbar.d.ts'
export class HotbarManager extends Object {
    static NUM_HOTBAR_GROUPS: number;
    constructor(workingDirectory: Path[], fixerUpper: DataFixer)
    // private fixerUpper: DataFixer;
    // private hotbars: Hotbar[];
    // private loaded: boolean;
    // private optionsFile: Path[];
    get(id: number): Hotbar;
    // private load(): void;
    save(): void;
}