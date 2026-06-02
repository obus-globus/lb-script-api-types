import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsDescriptionDto extends Record implements ReflectionBasedSerialization {
    constructor(name: string, description: string)
    // private description: string;
    // private name: string;
    description(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
}