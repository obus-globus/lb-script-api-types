import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Tag extends Object {
    static BINARY: Tag;
    static BOOL: Tag;
    static COMMENT: Tag;
    static FLOAT: Tag;
    static INT: Tag;
    static MAP: Tag;
    static MERGE: Tag;
    static NULL: Tag;
    static OMAP: Tag;
    static PAIRS: Tag;
    static PREFIX: string;
    static SEQ: Tag;
    static SET: Tag;
    static STR: Tag;
    static TIMESTAMP: Tag;
    static YAML: Tag;
    static standardTags: Tag[];
    constructor(arg0: Class<Object>)
    constructor(arg0: string)
    readonly secondary: boolean;
    readonly value: string;
    equals(arg0: Object | null): boolean;
    getClassName(): string;
    getValue(): string;
    hashCode(): number;
    isCompatible(arg0: Class<Object>): boolean;
    isCustomGlobal(): boolean;
    isSecondary(): boolean;
    matches(arg0: Class<Object>): boolean;
    startsWith(arg0: string): boolean;
    toString(): string;
}