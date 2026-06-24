import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HorseDataStorage extends Record {
    constructor(data: number, saddled: boolean)
    // private data: number;
    // private saddled: boolean;
    data(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    saddled(): boolean;
    toString(): string;
}