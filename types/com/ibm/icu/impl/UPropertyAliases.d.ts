import type { BytesTrie$Entry } from '../../../../com/ibm/icu/util/BytesTrie$Entry.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class UPropertyAliases extends Object {
    static INSTANCE: UPropertyAliases;
    static compare(paramarg0: string, paramarg1: string): number;
    private constructor()
    // private bytesTries: number[];
    // private nameGroups: string;
    // private valueMaps: number[];
    // private containsName(arg0: BytesTrie$Entry[], arg1: CharSequence): boolean;
    // private findProperty(arg0: number): number;
    // private findPropertyValueNameGroup(arg0: number, arg1: number): number;
    // private getName(arg0: number, arg1: number): string;
    getPropertyEnum(arg0: CharSequence): number;
    getPropertyName(arg0: number, arg1: number): string;
    // private getPropertyOrValueEnum(arg0: number, arg1: CharSequence): number;
    getPropertyValueEnum(arg0: number, arg1: CharSequence): number;
    getPropertyValueEnumNoThrow(arg0: number, arg1: CharSequence): number;
    getPropertyValueName(arg0: number, arg1: number, arg2: number): string;
    // private load(arg0: ByteBuffer): void;
}