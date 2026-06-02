import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSAttributes extends Object {
    static ATTRIBUTES_MASK: number;
    static CONFIGURABLE: TruffleString;
    static ENUMERABLE: TruffleString;
    static GET: TruffleString;
    static NOT_CONFIGURABLE: number;
    static NOT_ENUMERABLE: number;
    static NOT_WRITABLE: number;
    static SET: TruffleString;
    static VALUE: TruffleString;
    static WRITABLE: TruffleString;
    static configurableEnumerableNotWritable(): number;
    static configurableEnumerableWritable(): number;
    static configurableNotEnumerable(): number;
    static configurableNotEnumerableNotWritable(): number;
    static configurableNotEnumerableWritable(): number;
    static fromConfigurableEnumerable(paramconfigurable: boolean, paramenumerable: boolean): number;
    static fromConfigurableEnumerableWritable(paramconfigurable: boolean, paramenumerable: boolean, paramwritable: boolean): number;
    static getDefault(): number;
    static getDefaultNotEnumerable(): number;
    static isConfigurable(paramflags: number): boolean;
    static isEnumerable(paramflags: number): boolean;
    static isWritable(paramflags: number): boolean;
    static notConfigurableEnumerableNotWritable(): number;
    static notConfigurableEnumerableWritable(): number;
    static notConfigurableNotEnumerable(): number;
    static notConfigurableNotEnumerableNotWritable(): number;
    static notConfigurableNotEnumerableWritable(): number;
    private constructor()
}