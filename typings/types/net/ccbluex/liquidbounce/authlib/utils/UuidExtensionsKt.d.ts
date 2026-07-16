import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UuidExtensionsKt extends Object {
    static generateOfflinePlayerUuid(name: string): UUID;
    static parseUuid(string: string): UUID;
}