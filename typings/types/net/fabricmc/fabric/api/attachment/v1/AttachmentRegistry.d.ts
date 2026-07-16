import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AttachmentRegistry$Builder } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentRegistry$Builder.d.ts'
import type { AttachmentType } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class AttachmentRegistry extends Object {
    static builder<A extends unknown>(): AttachmentRegistry$Builder<A>;
    static create<A extends unknown>(paramarg0: Identifier): AttachmentType<A>;
    static create<A extends unknown>(paramarg0: Identifier, paramarg1: (param0: AttachmentRegistry$Builder<A>) => void): AttachmentType<A>;
    static createDefaulted<A extends unknown>(paramarg0: Identifier, paramarg1: () => A): AttachmentType<A>;
    static createPersistent<A extends unknown>(paramarg0: Identifier, paramarg1: Codec<A>): AttachmentType<A>;
    private constructor()
}