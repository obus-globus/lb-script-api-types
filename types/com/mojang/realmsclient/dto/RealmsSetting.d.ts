import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsSetting extends Record implements ReflectionBasedSerialization {
    static hardcoreSetting(paramhardcore: boolean): RealmsSetting;
    static isHardcore(paramsettings: RealmsSetting[]): boolean;
    constructor(name: string, value: string)
    // private name: string;
    // private value: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
    value(): string;
}