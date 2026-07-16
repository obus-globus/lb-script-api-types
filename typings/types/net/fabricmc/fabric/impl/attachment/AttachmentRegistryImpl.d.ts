import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AttachmentRegistry$Builder } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentRegistry$Builder.d.ts'
import type { AttachmentType } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class AttachmentRegistryImpl extends Object {
    static builder<A extends unknown>(): AttachmentRegistry$Builder<A>;
    static get(paramarg0: Identifier): AttachmentType<Object>;
    static getMaxSyncPacketSize(): number;
    static getSyncableAttachments(): Identifier[];
    static register<A extends unknown>(paramarg0: Identifier, paramarg1: AttachmentType<A>): void;
    constructor()
}