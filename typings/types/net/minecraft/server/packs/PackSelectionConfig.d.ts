import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pack$Position } from '../../../../net/minecraft/server/packs/repository/Pack$Position.d.ts'
export class PackSelectionConfig extends Record {
    constructor(required: boolean, defaultPosition: Pack$Position, fixedPosition: boolean)
    // private defaultPosition: Pack$Position;
    // private fixedPosition: boolean;
    // private required: boolean;
    defaultPosition(): Pack$Position;
    equals(o: Object | null): boolean;
    fixedPosition(): boolean;
    hashCode(): number;
    required(): boolean;
    toString(): string;
}