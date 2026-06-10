import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AttachmentRegistry$Builder } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentRegistry$Builder.d.ts'
import type { AttachmentType } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class AttachmentRegistry extends Object {
    static builder(): AttachmentRegistry$Builder<Object>;
    static create(paramarg0: Identifier): AttachmentType<Object>;
    static create(paramarg0: Identifier, paramarg1: (param0: AttachmentRegistry$Builder<Object>) => void): AttachmentType<Object>;
    static createDefaulted(paramarg0: Identifier, paramarg1: () => Object | null): AttachmentType<Object>;
    static createPersistent(paramarg0: Identifier, paramarg1: Codec<Object>): AttachmentType<Object>;
    private constructor()
}