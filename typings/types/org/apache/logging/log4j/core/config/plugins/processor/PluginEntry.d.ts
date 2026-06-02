import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class PluginEntry extends Object implements Serializable {
    constructor()
    readonly category: string;
    readonly className: string;
    readonly defer: boolean;
    readonly key: string;
    readonly name: string;
    readonly printable: boolean;
    getCategory(): string;
    getClassName(): string;
    getKey(): string;
    getName(): string;
    isDefer(): boolean;
    isPrintable(): boolean;
    setCategory(category: string): void;
    setClassName(className: string): void;
    setDefer(defer: boolean): void;
    setKey(key: string): void;
    setName(name: string): void;
    setPrintable(printable: boolean): void;
    toString(): string;
}