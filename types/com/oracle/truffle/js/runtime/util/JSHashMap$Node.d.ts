import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSHashMap$Node extends Object {
    constructor(key: Object, value: Object, prev: JSHashMap$Node, next: JSHashMap$Node)
    // private key: Object;
    // private next: JSHashMap$Node;
    // private prev: JSHashMap$Node;
    // private value: Object;
    getKey(): Object;
    getNext(): JSHashMap$Node;
    getPrev(): JSHashMap$Node;
    getValue(): Object;
    isEmpty(): boolean;
    setEmpty(): void;
    setNext(next: JSHashMap$Node): void;
    setPrev(prev: JSHashMap$Node): void;
    setValue(value: Object): void;
    toString(): string;
}