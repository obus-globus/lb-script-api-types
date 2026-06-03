import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BaseApiKt extends Object {
    static formatAvatarUrl(uuid: UUID, username: string): string;
}