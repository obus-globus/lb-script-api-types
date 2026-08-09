import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { NoteBlockInstrument } from '../../../../../../../../../net/minecraft/world/level/block/state/properties/NoteBlockInstrument.d.ts'
export class InstrumentNote$Companion extends Object {
    /**
     * Maps vanilla NBS instrument ids to Minecraft note block instruments.
     *
     * @see net.minecraft.world.level.block.NoteBlock
     * @see net.minecraft.world.level.block.state.properties.NoteBlockInstrument
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.kt:66}
     */
    getInstrumentEnumFromId(id: number): NoteBlockInstrument;
}