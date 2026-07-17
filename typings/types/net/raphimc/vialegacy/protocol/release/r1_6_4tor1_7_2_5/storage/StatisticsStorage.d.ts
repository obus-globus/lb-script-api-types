import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class StatisticsStorage extends Object implements StorableObject {
    constructor()
    values: JavaMap<any, any>;
    onRemove(): void;
}