import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HangingSignBlock$Attachment } from '../../../../../net/minecraft/world/level/block/HangingSignBlock$Attachment.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface HangingSignBlock extends Object{
    attachmentPoint(state: BlockState): HangingSignBlock$Attachment;
}