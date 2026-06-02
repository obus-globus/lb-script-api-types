import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlainSignBlock$Attachment } from '../../../../../net/minecraft/world/level/block/PlainSignBlock$Attachment.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface PlainSignBlock extends Object{
    attachmentPoint(state: BlockState): PlainSignBlock$Attachment;
}