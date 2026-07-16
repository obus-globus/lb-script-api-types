import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Attribute } from '../../../../../../org/objectweb/asm/Attribute.d.ts'
import type { ClassReader } from '../../../../../../org/objectweb/asm/ClassReader.d.ts'
import type { ClassWriter } from '../../../../../../org/objectweb/asm/ClassWriter.d.ts'
import type { Label } from '../../../../../../org/objectweb/asm/Label.d.ts'
export class NewAttribute extends Attribute {
    static read(paramarg0: Attribute, paramarg1: ClassReader, paramarg2: number, paramarg3: number, paramarg4: string[], paramarg5: number, paramarg6: Label[]): Attribute;
    static readLabel(paramarg0: ClassReader, paramarg1: number, paramarg2: Label[]): Label;
    static write(paramarg0: Attribute, paramarg1: ClassWriter, paramarg2: number[], paramarg3: number, paramarg4: number, paramarg5: number): number[];
    constructor(arg0: string, arg1: string, arg2: number)
    constructor(arg0: ClassReader, arg1: string, arg2: string, arg3: number[], arg4: string[], arg5: number, arg6: Label[])
    // private buf: string[];
    // private classReader: ClassReader;
    // private codeOff: number;
    // private contents: number[];
    readonly contextClass: boolean;
    readonly contextCode: boolean;
    readonly contextField: boolean;
    readonly contextMethod: boolean;
    // private labels: Label[];
    readonly layout: string;
    addContext(arg0: number): void;
    getBytes(): number[];
    getLabel(arg0: number): Label;
    getLayout(): string;
    isCodeAttribute(): boolean;
    isContextClass(): boolean;
    isContextCode(): boolean;
    isContextField(): boolean;
    isContextMethod(): boolean;
    isUnknown(): boolean;
    isUnknown(arg0: number): boolean;
    read(arg0: ClassReader, arg1: number, arg2: number, arg3: string[], arg4: number, arg5: Label[]): Attribute;
    readClass(arg0: number): string;
    readConst(arg0: number): Object;
    readUTF8(arg0: number): string;
}