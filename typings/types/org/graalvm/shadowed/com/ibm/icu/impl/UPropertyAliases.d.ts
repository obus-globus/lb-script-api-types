import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { BytesTrie$Entry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/BytesTrie$Entry.d.ts'
export class UPropertyAliases extends Object {
    static INSTANCE: UPropertyAliases;
    static compare(paramstra: string, paramstrb: string): number;
    private constructor()
    // private bytesTries: number[];
    // private nameGroups: string;
    // private valueMaps: number[];
    // private containsName(trie: BytesTrie$Entry[], name: CharSequence): boolean;
    // private findProperty(property: number): number;
    // private findPropertyValueNameGroup(valueMapIndex: number, value: number): number;
    // private getName(nameGroupsIndex: number, nameIndex: number): string;
    getPropertyEnum(alias: CharSequence): number;
    getPropertyName(property: number, nameChoice: number): string;
    // private getPropertyOrValueEnum(bytesTrieOffset: number, alias: CharSequence): number;
    getPropertyValueEnum(property: number, alias: CharSequence): number;
    getPropertyValueEnumNoThrow(property: number, alias: CharSequence): number;
    getPropertyValueName(property: number, value: number, nameChoice: number): string;
    // private load(bytes: ByteBuffer): void;
}