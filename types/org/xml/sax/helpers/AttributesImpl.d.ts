import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
export class AttributesImpl extends Object implements Attributes {
    constructor()
    constructor(arg0: Attributes)
    // private data: string[];
    length: number;
    addAttribute(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string): void;
    // private badIndex(arg0: number): void;
    clear(): void;
    // private ensureCapacity(arg0: number): void;
    getIndex(arg0: string): number;
    getIndex(arg0: string, arg1: string): number;
    getLength(): number;
    getLocalName(arg0: number): string;
    getQName(arg0: number): string;
    getType(arg0: number): string;
    getType(arg0: string): string;
    getType(arg0: string, arg1: string): string;
    getURI(arg0: number): string;
    getValue(arg0: number): string;
    getValue(arg0: string): string;
    getValue(arg0: string, arg1: string): string;
    removeAttribute(arg0: number): void;
    setAttribute(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string): void;
    setAttributes(arg0: Attributes): void;
    setLocalName(arg0: number, arg1: string): void;
    setQName(arg0: number, arg1: string): void;
    setType(arg0: number, arg1: string): void;
    setURI(arg0: number, arg1: string): void;
    setValue(arg0: number, arg1: string): void;
}