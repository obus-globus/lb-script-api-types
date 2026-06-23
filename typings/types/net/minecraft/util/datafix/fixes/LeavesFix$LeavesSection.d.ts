import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LeavesFix$Section } from '../../../../../net/minecraft/util/datafix/fixes/LeavesFix$Section.d.ts'
export class LeavesFix$LeavesSection extends LeavesFix$Section {
    constructor(section: Typed<Object>, inputSchema: Schema)
    // private leaveIds: (Object | null)[];
    // private logIds: (Object | null)[];
    // private stateToIdMap: { [key: string]: any };
    // private getDistance(block: number): number;
    isLeaf(block: number): boolean;
    isLog(block: number): boolean;
    // private makeLeafTag(input: Dynamic<Object>, blockName: string, persistent: boolean, distance: number): Dynamic<Object>;
    // private setDistance(pos: number, block: number, distance: number): void;
    skippable(): boolean;
}