import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface DebugScreenDisplayer extends Object{
    addLine(line: string): void;
    addPriorityLine(line: string): void;
    addToGroup(group: Identifier, lines: string): void;
    addToGroup(group: Identifier, lines: string[]): void;
}