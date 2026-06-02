import type { Object } from '../../../java/lang/Object.d.ts'
export class CommandHistory extends Object {
    constructor(gameFolder: Path[])
    // private commandsPath: Path[];
    // private lastCommands: string[];
    addCommand(command: string): void;
    history(): E[];
    // private save(): void;
}