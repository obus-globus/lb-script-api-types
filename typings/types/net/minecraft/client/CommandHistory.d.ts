import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CommandHistory extends Object {
    constructor(gameFolder: Path)
    // private commandsPath: Path;
    // private lastCommands: string[];
    addCommand(command: string): void;
    history(): string[];
    // private save(): void;
}