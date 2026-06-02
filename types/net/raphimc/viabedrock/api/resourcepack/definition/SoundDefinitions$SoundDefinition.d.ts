import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SoundDefinitions$SoundDefinition extends Record {
    constructor(name: string, category: string)
    // private category: string;
    // private name: string;
    category(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
}