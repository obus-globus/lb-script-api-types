import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LeavesFix$Section } from '../../../../../net/minecraft/util/datafix/fixes/LeavesFix$Section.d.ts'
export class TrappedChestBlockEntityFix$TrappedChestSection extends LeavesFix$Section {
    constructor(section: Typed<Object>, inputSchema: Schema)
    // private chestIds: (Object | null)[];
    isTrappedChest(block: number): boolean;
    skippable(): boolean;
}