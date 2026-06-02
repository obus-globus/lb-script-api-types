import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class NameClassPair extends Object implements Serializable {
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: boolean)
    readonly className: string;
    // private fullName: string;
    // private isRel: boolean;
    readonly name: string;
    getClassName(): string;
    getName(): string;
    getNameInNamespace(): string;
    isRelative(): boolean;
    setClassName(arg0: string): void;
    setName(arg0: string): void;
    setNameInNamespace(arg0: string): void;
    setRelative(arg0: boolean): void;
    toString(): string;
}