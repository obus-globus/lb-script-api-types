import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CookieStorage extends Object implements StorableObject {
    constructor()
    // private cookies: JavaMap<string, number[]>;
    cookies(): JavaMap<string, number[]>;
    onRemove(): void;
}