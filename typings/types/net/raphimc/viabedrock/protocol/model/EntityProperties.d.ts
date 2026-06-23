import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EntityProperties extends Record {
    constructor(intProperties: { [key: string]: any }, floatProperties: { [key: string]: any })
    // private floatProperties: { [key: string]: any };
    // private intProperties: { [key: string]: any };
    equals(arg0: Object | null): boolean;
    floatProperties(): { [key: string]: any };
    hashCode(): number;
    intProperties(): { [key: string]: any };
    toString(): string;
}