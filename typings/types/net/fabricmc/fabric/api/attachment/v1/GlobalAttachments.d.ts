import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AttachmentTarget } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget.d.ts'
import type { AttachmentTarget$OnAttachedSet } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget$OnAttachedSet.d.ts'
import type { AttachmentType } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
export interface GlobalAttachments extends Object, AttachmentTarget {
    getAttached<A extends unknown>(arg0: AttachmentType<A>): A;
    getAttachedOrCreate<A extends unknown>(arg0: AttachmentType<A>): A;
    getAttachedOrCreate<A extends unknown>(arg0: AttachmentType<A>, arg1: () => A): A;
    getAttachedOrElse<A extends unknown>(arg0: AttachmentType<A>, arg1: A): A;
    getAttachedOrGet<A extends unknown>(arg0: AttachmentType<A>, arg1: () => A): A;
    getAttachedOrSet<A extends unknown>(arg0: AttachmentType<A>, arg1: A): A;
    getAttachedOrThrow<A extends unknown>(arg0: AttachmentType<A>): A;
    hasAttached(arg0: AttachmentType<Object>): boolean;
    modifyAttached<A extends unknown>(arg0: AttachmentType<A>, arg1: (param0: A) => Object | null): A;
    onAttachedSet<A extends unknown>(arg0: AttachmentType<A>): Event<(param0: A, param1: A) => void>;
    removeAttached<A extends unknown>(arg0: AttachmentType<A>): A;
    setAttached<A extends unknown>(arg0: AttachmentType<A>, arg1: A): A;
}