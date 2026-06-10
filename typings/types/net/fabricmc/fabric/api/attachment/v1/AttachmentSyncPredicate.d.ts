import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AttachmentTarget } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export interface AttachmentSyncPredicate extends BiPredicate<AttachmentTarget, ServerPlayer>, Object {
    and(arg0: (param0: AttachmentTarget, param1: ServerPlayer) => boolean): (param0: AttachmentTarget, param1: ServerPlayer) => boolean;
    negate(): (param0: AttachmentTarget, param1: ServerPlayer) => boolean;
    or(arg0: (param0: AttachmentTarget, param1: ServerPlayer) => boolean): (param0: AttachmentTarget, param1: ServerPlayer) => boolean;
}