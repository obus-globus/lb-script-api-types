import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlobalAttachments } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/GlobalAttachments.d.ts'
export interface GlobalAttachmentsProvider extends Object{
    globalAttachments(): GlobalAttachments;
}