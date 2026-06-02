import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CookieStorage extends Object implements StorableObject {
    constructor()
    // private cookies: { [key: string]: number[] };
    cookies(): { [key: string]: number[] };
    onRemove(): void;
}