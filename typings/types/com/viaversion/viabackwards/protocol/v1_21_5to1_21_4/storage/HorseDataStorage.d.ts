import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HorseDataStorage extends Record implements StorableObject {
    constructor(data: number, saddled: boolean)
    // private data: number;
    // private saddled: boolean;
    data(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    onRemove(): void;
    saddled(): boolean;
    toString(): string;
}