import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class OpenScreenStorage extends Object implements StorableObject {
    constructor()
    readonly menuType: number;
    menuType(): number;
    onRemove(): void;
    setMenuType(arg0: number): void;
}