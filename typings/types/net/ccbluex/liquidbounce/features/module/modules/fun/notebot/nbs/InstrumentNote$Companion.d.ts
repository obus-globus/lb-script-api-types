import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { NoteBlockInstrument } from '../../../../../../../../../net/minecraft/world/level/block/state/properties/NoteBlockInstrument.d.ts'
export class InstrumentNote$Companion extends Object {
    /**
     * Maps vanilla NBS instrument ids to Minecraft note block instruments.
     *
     * @see net.minecraft.world.level.block.NoteBlock
     * @see net.minecraft.world.level.block.state.properties.NoteBlockInstrument
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.kt:66}
     */
    getInstrumentEnumFromId(id: number): NoteBlockInstrument;
}